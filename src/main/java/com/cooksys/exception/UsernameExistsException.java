package com.cooksys.exception;

public class UsernameExistsException extends RuntimeException {
	
	public UsernameExistsException() {
		super("Username chosen already exists");
	}
}
