package com.example.roleplay.repository;

// import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.roleplay.model.Classe;
// import com.example.roleplay.model.Joueur;

@Repository
public interface ClasseRepository extends JpaRepository<Classe, Integer>{

}
