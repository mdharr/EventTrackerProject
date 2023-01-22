package com.skilldistillery.arcades.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.arcades.entities.Arcade;
import com.skilldistillery.arcades.repositories.ArcadeRepository;

@Service
public class ArcadeServiceImpl implements ArcadeService {
	
	@Autowired
	private ArcadeRepository arcadeRepo;

	@Override
	public List<Arcade> allArcades() {
		return arcadeRepo.findAll();
	}

	@Override
	public Arcade getArcade(int arcadeId) {
		Arcade arcade = null;
		Optional<Arcade> arcadeOpt = arcadeRepo.findById(arcadeId);
		if (arcadeOpt.isPresent()) {
			arcade = arcadeOpt.get();
		}
		return arcade;
	}

	@Override
	public Arcade create(Arcade arcade) {
		
		return arcadeRepo.saveAndFlush(arcade);
	}

	@Override
	public Arcade update(int arcadeId, Arcade arcade) {
		Arcade existing = getArcade(arcadeId);
		existing.setName(arcade.getName());
		existing.setDescription(arcade.getDescription());
		existing.setImageUrl(arcade.getImageUrl());
		return arcadeRepo.save(existing);
	}

	@Override
	public boolean deleteById(int arcadeId) {
		arcadeRepo.deleteById(arcadeId);
		return !arcadeRepo.existsById(arcadeId);
	}

}
