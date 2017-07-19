package com.cooksys.entity;

import java.util.ArrayList;
import java.util.List;

import com.cooksys.pojo.Flight;

public class FlightSchedule {
	
	private List<Flight> flights = new ArrayList<>();

	public List<Flight> getFlights() {
		return flights;
	}

	public void setFlights(List<Flight> flights) {
		this.flights = flights;
	}
	
}
