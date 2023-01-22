package com.skilldistillery.arcades.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.arcades.entities.Arcade;

public interface ArcadeRepository extends JpaRepository<Arcade, Integer> {
	
	List<Arcade> findByNameLike(String name);

}
