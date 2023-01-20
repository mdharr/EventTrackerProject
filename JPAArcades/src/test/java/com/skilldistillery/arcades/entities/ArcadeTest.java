package com.skilldistillery.arcades.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ArcadeTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Arcade arcade;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAArcades");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		arcade = em.find(Arcade.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		arcade = null;
	}

	@Test
	void test_Arcade_entity_mapping() {
		assertNotNull(arcade);
		assertEquals("Galloping Ghost Arcade", arcade.getName());
	}

}
