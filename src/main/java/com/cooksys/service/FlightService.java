package com.cooksys.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.cooksys.component.FlightGenerator;
import com.cooksys.entity.FlightSchedule;
import com.cooksys.pojo.Flight;

@Service
public class FlightService {

	@Autowired
	FlightGenerator generator;
	
	private Logger log = LoggerFactory.getLogger(getClass());

	private ArrayList<Flight> flightList = new ArrayList<>();
	
	public List<FlightSchedule> flightSearch(String origin, String destination) {
		List<FlightSchedule> searchList = new ArrayList<>();
		
		log.debug("Creating Match Origin Only");
		List<Flight> matchOrigin = flightList.stream()
				.filter(flight -> flight.getOrigin().equalsIgnoreCase(origin) && !flight.getDestination().equalsIgnoreCase(destination))
				.collect(Collectors.toList());
		
		log.debug("Creating Match Destination Only");
		List<Flight> matchDestination = flightList.stream()
				.filter(flight -> flight.getDestination().equalsIgnoreCase(destination) && !flight.getOrigin().equalsIgnoreCase(origin))
				.collect(Collectors.toList());
		
		log.debug("Creating Match of Both");
		List<Flight> matchBoth = flightList.stream()
				.filter(flight -> flight.getOrigin().equalsIgnoreCase(origin) && flight.getDestination().equalsIgnoreCase(destination))
				.collect(Collectors.toList());
		
		//Direct Flights -- Creates a Schedule for each individual flight
		if (!matchBoth.isEmpty()) {
			for (Flight flightIn : matchBoth) {
				log.debug("Inside direct flights call origin" + flightIn.getOrigin());
				FlightSchedule fSchedule = new FlightSchedule();
				fSchedule.getFlights().add(flightIn);
				searchList.add(fSchedule);
			}
		}
		
		//Layover Flights -- Creates a schedule for a flight that contains layovers
		for (int i = 0; i < matchOrigin.size(); i++) {
			for (int j = 0; j < matchDestination.size(); j++) {
				if (matchOrigin.get(i).getDestination().equalsIgnoreCase(matchDestination.get(j).getOrigin())
						&& matchOrigin.get(i).getOffset() < matchDestination.get(j).getOffset()
						&& (matchOrigin.get(i).getOffset() + matchOrigin.get(i).getFlightTime()) < matchDestination.get(j).getOffset()
						) {
					log.debug("Inside layover flights: Found Match");
					FlightSchedule layOver = new FlightSchedule();
					layOver.getFlights().add(matchOrigin.get(i));
					layOver.getFlights().add(matchDestination.get(j));
					searchList.add(layOver);
				}
			}
		}
		
		return searchList;
	}
	
	public ArrayList<Flight> getDailyFlightList()
	{
		return flightList;
	}
	
	//The fixedDelay parameter determines how often a new day is generated as expressed in milliseconds
	@Scheduled(fixedDelay=300000)
	private void refreshFlights()
	{
		flightList = generator.generateNewFlightList();
	}
	
}
