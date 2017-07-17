package com.cooksys.mapper;

import org.mapstruct.Mapper;

import com.cooksys.dto.UserProfileDto;
import com.cooksys.entity.UserProfile;

@Mapper(componentModel = "spring")
public interface UserProfileMapper {
	
	UserProfileDto toUserProfileDto(UserProfile u);
	UserProfile toUserProfile(UserProfileDto u);

}
