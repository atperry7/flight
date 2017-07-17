package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.entity.FlightUser;

public interface FlightUserRepository extends JpaRepository<FlightUser, Integer> {
	FlightUser findByCredentials_UsernameEqualsAndCredentials_PasswordEquals(String username, String password);
	FlightUser findByCredentials_UsernameEquals(String username);
}
