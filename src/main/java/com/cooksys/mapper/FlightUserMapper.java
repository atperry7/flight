package com.cooksys.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import com.cooksys.dto.FlightUserCredsOnlyDto;
import com.cooksys.dto.FlightUserDto;
import com.cooksys.entity.FlightUser;

@Mapper(componentModel = "spring", uses = {UserProfileMapper.class})
public interface FlightUserMapper {
    @Mappings({
        @Mapping(source = "credentials.username", target = "username"),
        @Mapping(source = "credentials.password", target = "password")
    })
    FlightUserCredsOnlyDto toFlightUserCredsOnlyDto(FlightUser u);
    FlightUser toFlightUser(FlightUserCredsOnlyDto u);
    
    @Mappings({
        @Mapping(source = "credentials.username", target = "username")
    })
    FlightUserDto toFlightUserDto(FlightUser u);
    FlightUser toFlightUser(FlightUserDto u);
}
