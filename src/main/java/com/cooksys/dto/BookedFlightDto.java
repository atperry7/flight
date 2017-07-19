package com.cooksys.dto;

import java.sql.Date;

public class BookedFlightDto {

	private Integer id;
	private Date dateBooked;
	private String origin;
	private String destination;
	private Integer flightTime;
	private Integer offSetTime;

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

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public Integer getFlightTime() {
		return flightTime;
	}

	public void setFlightTime(Integer flightTime) {
		this.flightTime = flightTime;
	}

	public Integer getOffSetTime() {
		return offSetTime;
	}

	public void setOffSetTime(Integer offSetTime) {
		this.offSetTime = offSetTime;
	}

}
