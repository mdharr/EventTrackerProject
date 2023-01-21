package com.skilldistillery.arcades.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.arcades.entities.Arcade;

public interface ArcadeRepository extends JpaRepository<Arcade, Integer> {

}
