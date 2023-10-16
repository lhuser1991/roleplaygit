package com.example.roleplay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
public class JoueurController {

    @Autowired
    private JoueurRepository joueurRepository;

    @Autowired
    private ClasseRepository classeRepository;

    @GetMapping("/joueur")
    public List<Joueur> getAllJoueurs() {
        return joueurRepository.findAll();
    }

    @GetMapping("/joueur/{id}")
    public ResponseEntity<Joueur> getEmployeById(@PathVariable Integer id) {
        Joueur joueur = joueurRepository.findById(id).orElseThrow(() -> new RessourceNotFoundException("Le joueur n'existe pas pour l\'id : " + id));
        return ResponseEntity.ok(joueur);
    }

    @GetMapping("/guerrier")
    public List<Joueur> getAllGuerriers() {
        return joueurRepository.getGuerriers();
    }

    @GetMapping("/voleur")
    public List<Joueur> getAllVoleurs() {
        return joueurRepository.getVoleurs();
    }

    @GetMapping("/magicien")
    public List<Joueur> getAllMagiciens() {
        return joueurRepository.getMagiciens();
    }

    @PostMapping("/joueur")
    public Joueur createJoueur(@RequestBody Joueur joueur){
        Joueur newJoueur = new Joueur();
        Classe newClasse = classeRepository.findById(joueur.getId_classe()).orElseThrow(() -> new RessourceNotFoundException("La classe n'existe pas pour l\'id : " + joueur.getId_classe()));
        newJoueur.setNom(joueur.getNom());
        newJoueur.setNiveau(joueur.getNiveau());
        newJoueur.setId_classe(joueur.getId_classe());
        newJoueur.setClasse(newClasse);
        return joueurRepository.save(newJoueur);
    }

    @PutMapping("/joueur/{id}")
    public ResponseEntity<Joueur> updateJoueur(@PathVariable Integer id, @RequestBody Joueur joueurData) {
        Joueur joueur = joueurRepository.findById(id).orElseThrow(() -> new RessourceNotFoundException("Le joueur n'existe pas pour l\'id : " + id));
        Classe classe = classeRepository.findById(joueurData.getId_classe()).orElseThrow(() -> new RessourceNotFoundException("La classe n'existe pas pour l\'id : " + joueurData.getId_classe()));

        joueur.setNom(joueurData.getNom());
        joueur.setNiveau(joueurData.getNiveau());
        joueur.setId_classe(joueurData.getId_classe());
        joueur.setClasse(classe);

        Joueur updatedJoueur = joueurRepository.save(joueur);
        return ResponseEntity.ok(updatedJoueur);
    }
}
