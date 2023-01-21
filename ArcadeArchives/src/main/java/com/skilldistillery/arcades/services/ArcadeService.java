package com.skilldistillery.arcades.services;

import java.util.List;

import com.skilldistillery.arcades.entities.Arcade;

public interface ArcadeService {
	List<Arcade> allArcades();
	Arcade getArcade(int arcadeId);
	Arcade create(Arcade arcade);
	Arcade update(int arcadeId, Arcade arcade);
	boolean deleteById(int arcadeId);

}
