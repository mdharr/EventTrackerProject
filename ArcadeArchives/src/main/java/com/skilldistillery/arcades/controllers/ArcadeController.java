package com.skilldistillery.arcades.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.arcades.entities.Arcade;
import com.skilldistillery.arcades.repositories.ArcadeRepository;
import com.skilldistillery.arcades.services.ArcadeService;

@RestController
@RequestMapping("api")
public class ArcadeController {
	
	@Autowired
	private ArcadeService arcadeService;
	
	@Autowired
	private ArcadeRepository arcadeRepo;
	
	@GetMapping("arcades")
	public List<Arcade> listAllArcades() {
		return arcadeService.allArcades();
	}
	
	@GetMapping("arcades/{id}")
	public Arcade getArcade(@PathVariable("id") int arcadeId, HttpServletResponse res) {
		
		if(arcadeService.getArcade(arcadeId) == null) {
			res.setStatus(404);
		}
		return arcadeService.getArcade(arcadeId);
	}
	
	@PostMapping("arcades")
	public Arcade createArcade(@RequestBody Arcade arcade, HttpServletResponse res, HttpServletRequest req) {
		
		try {
			arcadeService.create(arcade);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(arcade.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			arcade = null;
		}
		return arcade;
	}
	
	@DeleteMapping("arcades/{id}")
	public void deleteArcade(@PathVariable("id") Integer arcadeId, HttpServletResponse res, HttpServletRequest req) {
		
		try {
			if (arcadeService.deleteById(arcadeId)) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
	}
	
	@PutMapping("arcades/{id}")
	public Arcade updateArcade(@PathVariable("id") Integer arcadeId, @RequestBody Arcade arcade, HttpServletResponse res, HttpServletRequest req) {
		
		try {
			arcade = arcadeService.update(arcadeId, arcade);
			if (arcade == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			arcade = null;
		}
		return arcade;
		
	}
	
	@GetMapping("arcades/search/{keyword}")
	public List<Arcade> getArcadesByName(@PathVariable String keyword, HttpServletResponse res, HttpServletRequest req) {
		return arcadeRepo.findByNameLike("%" + keyword + "%");
	}

}
