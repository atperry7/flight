package com.cooksys.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.dto.FlightUserCredsOnlyDto;
import com.cooksys.service.BookedFlightService;

@RestController
@RequestMapping("reserve")
public class BookedFlightController {
	
	private BookedFlightService bService;
	
	public BookedFlightController(BookedFlightService bService) {
		this.bService = bService;
	}
	
	@PostMapping("reservation")
	public boolean reserveFlight(@RequestBody FlightUserCredsOnlyDto creds,
			@RequestParam(required = true) String flightOrigin,
			@RequestParam(required = true) String flightDestination,
			@RequestParam(required = true) String offSet,
			@RequestParam(required = true) String flightTime,
			@RequestParam(required = false) String layover
			) {
		return bService.createFlight(creds, flightOrigin, flightDestination, offSet, flightTime);
	}

}
