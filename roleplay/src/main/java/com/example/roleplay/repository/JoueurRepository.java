package com.example.roleplay.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.roleplay.model.Joueur;

@Repository
public interface JoueurRepository extends JpaRepository<Joueur, Integer>{
    @Query(value = "SELECT * FROM joueur WHERE id_classe = (SELECT id FROM classe WHERE titre = 'guerrier')", nativeQuery = true)
    List<Joueur> getGuerriers();

    @Query(value = "SELECT * FROM joueur WHERE id_classe = (SELECT id FROM classe WHERE titre = 'voleur')", nativeQuery = true)
    List<Joueur> getVoleurs();

    @Query(value = "SELECT * FROM joueur WHERE id_classe = (SELECT id FROM classe WHERE titre = 'magicien')", nativeQuery = true)
    List<Joueur> getMagiciens();

    @Query(value = "SELECT j.id, j.nom, j.niveau, j.id_classe FROM joueur j LEFT JOIN classe c ON j.id_classe = c.id WHERE c.titre = :classeTitre", nativeQuery = true)
    List<Joueur> findJoueursByClass(@Param("classeTitre") String classeTitre);
}
