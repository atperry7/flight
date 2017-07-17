package com.cooksys.mapper;

import org.mapstruct.Mapper;

import com.cooksys.dto.UserProfileDto;
import com.cooksys.dto.UserProfileEmailOnlyDto;
import com.cooksys.entity.UserProfile;

@Mapper(componentModel = "spring")
public interface UserProfileMapper {
	
	UserProfileDto toUserProfileDto(UserProfile u);
	UserProfile toUserProfile(UserProfileDto u);
	
	UserProfileEmailOnlyDto toUserProfileEmailOnlyDto(UserProfile u);
	UserProfile toUserProfile(UserProfileEmailOnlyDto u);

}
