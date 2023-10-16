package com.example.roleplay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.roleplay.exception.RessourceNotFoundException;
import com.example.roleplay.model.Classe;
import com.example.roleplay.model.Joueur;
import com.example.roleplay.repository.ClasseRepository;
import com.example.roleplay.repository.JoueurRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class ClasseController {
    
    @Autowired 
    ClasseRepository classeRepository;

    @Autowired 
    JoueurRepository joueurRepository;

    @GetMapping("/classe")
    public List<Classe> getAllClasses() {
        return classeRepository.findAll();
    }

    @GetMapping("/classe/{id}")
    public ResponseEntity<Classe> getClasseById(@PathVariable Integer id) {
        Classe classe = classeRepository.findById(id).orElseThrow(() -> new RessourceNotFoundException("La classe n'existe pas pour l\'id : " + id));
        return ResponseEntity.ok(classe);
    }

    @GetMapping("/classe/{classeTitre}/listejoueur")
    public List<Joueur> getJoueurByClasse(@PathVariable String classeTitre) {
        return joueurRepository.findJoueursByClass(classeTitre);
    }
}
