package com.cooksys.mapper;

import org.mapstruct.Mapper;

import com.cooksys.dto.BookedFlightDto;
import com.cooksys.entity.BookedFlight;

@Mapper(componentModel = "spring", uses = {FlightToBookMapper.class})
public interface BookedFlightMapper {
	BookedFlightDto toBookedFlightDto(BookedFlight b);
	BookedFlight toBookedFlight(BookedFlightDto b);
}
