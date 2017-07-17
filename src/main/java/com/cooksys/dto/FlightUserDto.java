package com.cooksys.dto;

import java.util.Date;

public class FlightUserDto {
	private String username;
	private Date joined;
	private UserProfileDto profile;

	public UserProfileDto getProfile() {
		return profile;
	}

	public void setProfile(UserProfileDto profile) {
		this.profile = profile;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Date getJoined() {
		return joined;
	}

	public void setJoined(Date joined) {
		this.joined = joined;
	}

}
