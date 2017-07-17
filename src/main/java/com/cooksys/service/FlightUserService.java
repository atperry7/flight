package com.cooksys.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cooksys.entity.FlightUser;
import com.cooksys.repository.FlightUserRepository;
import com.cooksys.exception.UsernameExistsException;

@Service
public class FlightUserService {

	private FlightUserRepository uRepository;

	public FlightUserService(FlightUserRepository uRepository) {
		this.uRepository = uRepository;
		
	}

	public List<FlightUser> getAll() {
		return uRepository.findAll();
	}

	public FlightUser validateUser(FlightUser flightUser) {
		return uRepository
				.findByCredentials_UsernameEqualsAndCredentials_PasswordEquals(
						flightUser.getCredentials().getUsername(), flightUser.getCredentials().getPassword());
	}

	public FlightUser save(FlightUser flightUser, String firstName, String lastName, String phone) {
		//Checks if a user is created
		if (exists(flightUser.getCredentials().getUsername())) {
			//Gets the user if the user was created
			FlightUser fUser = validateUser(flightUser);
			
			//If the user was deleted will reactive the user
			if (fUser != null && fUser.getIsActive().equals(false)) {
				fUser.setIsActive(true);
				return uRepository.save(fUser);
			}
			
			throw new UsernameExistsException();
		} 
		
		flightUser.getProfile().setFirstName(firstName);
		flightUser.getProfile().setLastName(lastName);
		flightUser.getProfile().setPhone(phone);
		
		//If all else fails then it creates a new user
		return uRepository.save(flightUser);
	}

	private boolean exists(String username) {
		return uRepository.findByCredentials_UsernameEquals(username) != null;
	}
	
}
