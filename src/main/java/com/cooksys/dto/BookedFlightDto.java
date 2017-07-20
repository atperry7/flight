package com.cooksys.dto;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import com.cooksys.entity.FlightToBook;

public class BookedFlightDto {

	private Integer id;
	private Date dateBooked;
	private Set<FlightToBookDto> flights = new HashSet<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDateBooked() {
		return dateBooked;
	}

	public void setDateBooked(Date dateBooked) {
		this.dateBooked = dateBooked;
	}

	public Set<FlightToBookDto> getFlights() {
		return flights;
	}

	public void setFlights(Set<FlightToBookDto> flights) {
		this.flights = flights;
	}

}
