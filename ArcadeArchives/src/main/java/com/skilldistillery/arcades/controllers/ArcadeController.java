package com.skilldistillery.arcades.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.arcades.entities.Arcade;
import com.skilldistillery.arcades.services.ArcadeService;

@RestController
@RequestMapping("api")
public class ArcadeController {
	
	@Autowired
	private ArcadeService arcadeService;
	
	@GetMapping("arcades")
	public List<Arcade> listAllArcades() {
		return arcadeService.allArcades();
	}

}
