package com.cooksys.mapper;

import org.mapstruct.Mapper;

import com.cooksys.dto.FlightToBookDto;
import com.cooksys.entity.FlightToBook;

@Mapper(componentModel = "spring")
public interface FlightToBookMapper {
	
	FlightToBookDto toFlightToBookDto(FlightToBook b);
	FlightToBook toFlightToBook(FlightToBookDto b);

}
