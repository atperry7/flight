package com.cooksys.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class FlightToBook {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(updatable = false)
	private Date dateBooked;

	// Name of city where flight originates
	private String origin;

	// Name of city where flight lands
	private String destination;

	// How many hours flight is in the air
	private Integer flightTime;

	// How many hours after the start of the day until the flight takes off
	private Integer offSetTime;

	@OneToMany(mappedBy = "flights", fetch = FetchType.LAZY)
	private Set<BookedFlight> bookedFlights = new HashSet<>();

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

	public Set<BookedFlight> getBookedFlights() {
		return bookedFlights;
	}

	public void setBookedFlights(Set<BookedFlight> bookedFlights) {
		this.bookedFlights = bookedFlights;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FlightToBook other = (FlightToBook) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
