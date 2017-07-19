package com.cooksys.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.dto.BookedFlightDto;
import com.cooksys.dto.FlightUserCredsOnlyDto;
import com.cooksys.mapper.BookedFlightMapper;
import com.cooksys.service.BookedFlightService;

@RestController
@RequestMapping("reserve")
public class BookedFlightController {
	
	private BookedFlightService bService;
	private BookedFlightMapper bMapper;
	
	public BookedFlightController(BookedFlightService bService, BookedFlightMapper bMapper) {
		this.bService = bService;
		this.bMapper = bMapper;
	}
	
	@GetMapping("reservations")
	public List<BookedFlightDto> getAll() {
		return this.bService.findAll().stream().map(bMapper::toBookedFlightDto).collect(Collectors.toList());
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
