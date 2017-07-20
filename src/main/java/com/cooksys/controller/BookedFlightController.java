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
import com.cooksys.mapper.BookedFlightMapper;
import com.cooksys.pojo.Flight;
import com.cooksys.service.BookedFlightService;
import com.fasterxml.jackson.annotation.JsonFormat;

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
	@JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY)
	public boolean reserveFlight( @RequestBody List<Flight> flights,
			@RequestParam(required = true) String flightOrigin,
			@RequestParam(required = true) String flightDestination,
			@RequestParam(required = true) String username,
			@RequestParam(required = true) String password
			) {
		return bService.createFlight(username, password, flightOrigin, flightDestination, flights);
	}
	
	@PostMapping("reservation/layover")
	public boolean reserveFlightLayover(@RequestBody List<Flight> flights) {
		return true;
	}

}
