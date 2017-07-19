package com.cooksys.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.entity.BookedFlight;

public interface BookedFlightRepository extends JpaRepository<BookedFlight, Integer> {

}
