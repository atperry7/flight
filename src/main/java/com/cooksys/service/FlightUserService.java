package com.cooksys.service;

import org.springframework.stereotype.Service;

import com.cooksys.repository.FlightUserRepository;

@Service
public class FlightUserService {

	private FlightUserRepository uRepository;

	public FlightUserService(FlightUserRepository uRepository) {
		this.uRepository = uRepository;
		
	}
	
}
