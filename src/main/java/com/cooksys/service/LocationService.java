package com.cooksys.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cooksys.entity.Location;
import com.cooksys.repository.LocationRepository;

@Service
public class LocationService {
	
	@Autowired
	LocationRepository repo;
		
	public List<Location> getAll()
	{
		return repo.findAll();
	}

	public Location get(long id) {
		return repo.findById(id);
	}
	
	public Location get(String name) {
		return repo.findByCityIgnoreCase(name);
	}

	public List<Location> getLocations(String cityOne, String cityTwo, String cityThree) {
		List<Location> locations = new ArrayList<>();
		if (cityOne != null) {
			locations.add(repo.findByCityIgnoreCase(cityOne));
		}
		
		if (cityTwo != null) {
			locations.add(repo.findByCityIgnoreCase(cityTwo));
		}
		
		if (cityThree != null) {
			locations.add(repo.findByCityIgnoreCase(cityThree));
		}
		
		return locations;
	}
}
