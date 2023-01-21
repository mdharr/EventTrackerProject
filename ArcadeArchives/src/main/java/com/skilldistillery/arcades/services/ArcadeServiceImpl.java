package com.skilldistillery.arcades.services;

import java.util.List;

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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Arcade create(Arcade arcade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Arcade update(int arcadeId, Arcade arcade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteById(int arcadeId) {
		// TODO Auto-generated method stub
		return false;
	}

}
