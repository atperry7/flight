package com.cooksys.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cooksys.dto.FlightUserCredsOnlyDto;
import com.cooksys.entity.BookedFlight;
import com.cooksys.entity.FlightUser;
import com.cooksys.mapper.FlightUserMapper;
import com.cooksys.pojo.Flight;
import com.cooksys.repository.BookedFlightRepository;

@Service
public class BookedFlightService {

	private BookedFlightRepository bRepository;
	private FlightUserService flightUserService;
	private FlightUserMapper fMapper;

	public BookedFlightService(BookedFlightRepository bRepository, FlightUserService flightUserService, FlightUserMapper fMapper) {
		this.bRepository = bRepository;
		this.flightUserService = flightUserService;
		this.fMapper = fMapper;
	}
	
	public List<BookedFlight> findAll() {
		return bRepository.findAll();
	}

	public boolean createFlight(String username, String password, String flightOrigin, String flightDestination,
			List<Flight> flights) {
		BookedFlight bookedFlight = new BookedFlight();
		
		FlightUser flightUser = flightUserService.validation(username, password);
		
//		if (flightUser != null && flightUser.getIsActive().equals(true)) {
//			bookedFlight.setBookedUser(flightUser);
//			bookedFlight.setOrigin(flightOrigin);
//			bookedFlight.setDestination(flightDestination);
//			
//			bRepository.save(bookedFlight);
//			return true;
//		}
		
		
		return false;
	}

}
