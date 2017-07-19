package com.cooksys.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cooksys.dto.FlightUserCredsOnlyDto;
import com.cooksys.entity.BookedFlight;
import com.cooksys.entity.FlightUser;
import com.cooksys.mapper.FlightUserMapper;
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

	public boolean createFlight(FlightUserCredsOnlyDto creds, String flightOrigin, String flightDestination,
			String offSet, String flightTime) {
		BookedFlight bookedFlight = new BookedFlight();
		
		FlightUser flightUser = flightUserService.validateUser(fMapper.toFlightUser(creds));
		
		if (flightUser != null && flightUser.getIsActive().equals(true)) {
			bookedFlight.setBookedUser(flightUser);
			bookedFlight.setOrigin(flightOrigin);
			bookedFlight.setDestination(flightDestination);
			bookedFlight.setOffset(Integer.valueOf(offSet));
			bookedFlight.setFlightTime(Integer.valueOf(flightTime));
			
			bRepository.save(bookedFlight);
			return true;
		}
		
		
		return false;
	}

}
