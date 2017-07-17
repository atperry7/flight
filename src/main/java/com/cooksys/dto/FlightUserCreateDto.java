package com.cooksys.dto;

import com.cooksys.entity.Credentials;

public class FlightUserCreateDto {

	private Credentials credentials;

	private UserProfileEmailOnlyDto profile;

	public UserProfileEmailOnlyDto getProfile() {
		return profile;
	}

	public void setProfile(UserProfileEmailOnlyDto profile) {
		this.profile = profile;
	}

	public Credentials getCredentials() {
		return credentials;
	}

	public void setCredentials(Credentials credentials) {
		this.credentials = credentials;
	}

}
