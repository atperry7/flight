package com.cooksys.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.cooksys.entity.BookedFlight;
import com.cooksys.entity.FlightToBook;
import com.cooksys.entity.FlightUser;
import com.cooksys.mapper.FlightUserMapper;
import com.cooksys.pojo.Flight;
import com.cooksys.repository.BookedFlightRepository;
import com.cooksys.repository.FlightToBookRepository;

@Service
public class BookedFlightService {

	private Logger log = LoggerFactory.getLogger(getClass());

	private BookedFlightRepository bRepository;
	private FlightUserService flightUserService;
	private FlightUserMapper fMapper;

	private FlightToBookRepository fBookRepository;

	public BookedFlightService(BookedFlightRepository bRepository, FlightUserService flightUserService,
			FlightUserMapper fMapper, FlightToBookRepository fBookRepository) {
		this.bRepository = bRepository;
		this.flightUserService = flightUserService;
		this.fMapper = fMapper;
		this.fBookRepository = fBookRepository;
	}

	public List<BookedFlight> findAll() {
		return bRepository.findAll();
	}

	public boolean createFlight(String username, String password, String flightOrigin, String flightDestination,
			List<Flight> flights) {
		BookedFlight bookedFlight = new BookedFlight();



		FlightUser flightUser = flightUserService.validation(username, password);

		if (flightUser != null && flightUser.getIsActive().equals(true)) {
			bookedFlight.setBookedUser(flightUser);
			
			for (Flight flight : flights) {
				FlightToBook flightToBook = new FlightToBook();
				flightToBook.setOrigin(flight.getOrigin());
				flightToBook.setDestination(flight.getDestination());
				flightToBook.setFlightTime((int) flight.getFlightTime());
				flightToBook.setOffSetTime((int) flight.getOffset());

				
				
				bookedFlight.getFlights().add(flightToBook);
				flightToBook.setBookedFlight(bookedFlight);
				
				log.debug("Flight Added");
				bRepository.save(bookedFlight);
				fBookRepository.save(flightToBook);
			}
			return true;
		}

		return false;
	}

}
