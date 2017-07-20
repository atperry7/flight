package com.cooksys.controller;

import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cooksys.dto.BookedFlightDto;
import com.cooksys.dto.FlightUserCreateDto;
import com.cooksys.dto.FlightUserCredsOnlyDto;
import com.cooksys.dto.FlightUserDto;
import com.cooksys.mapper.BookedFlightMapper;
import com.cooksys.mapper.FlightUserMapper;
import com.cooksys.service.FlightUserService;

@RestController
@RequestMapping("user")
public class FlightUserController {
	
	private FlightUserService uService;
	private FlightUserMapper uMapper;
	private BookedFlightMapper bMapper;

	public FlightUserController(FlightUserService uService, FlightUserMapper uMapper, BookedFlightMapper bMapper) {
		this.uService = uService;
		this.uMapper = uMapper;
		this.bMapper = bMapper;
	}
	
	@GetMapping("users")
	public List<FlightUserDto> getAll() {
		return uService.getAll().stream()
				.map(uMapper::toFlightUserDto)
				.collect(Collectors.toList());
	}
	
	@PostMapping("validate/user")
	public FlightUserDto validate(@RequestBody FlightUserCredsOnlyDto userCredsOnlyDto) {
		return uMapper.toFlightUserDto(uService.validateUser(uMapper.toFlightUser(userCredsOnlyDto)));
	}
	
	@PostMapping("create")
	public FlightUserDto create(@RequestBody FlightUserCreateDto user,
			@RequestParam(required = false) String firstName, 
			@RequestParam(required = false) String lastName,
			@RequestParam(required = false) String phone,
			HttpServletResponse response) {
		response.setStatus(HttpServletResponse.SC_CREATED);
		return uMapper.toFlightUserDto(uService.save(uMapper.toFlightUser(user), firstName, lastName, phone));
		
	}
	
	@GetMapping("bookedflights/{username}")
	public List<BookedFlightDto> getBookedFlights(@PathVariable String username) {
		return uService.getBookedFlights(username).stream()
				.sorted((b1, b2) -> b2.getDateBooked().compareTo(b1.getDateBooked()))
				.map(bMapper::toBookedFlightDto)
				.collect(Collectors.toList());
	}
}
