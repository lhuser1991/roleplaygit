package com.example.roleplay.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "joueur")
public class Joueur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "niveau")
    private int niveau;

    @Column(name = "id_classe")
    private int id_classe;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_classe", referencedColumnName = "id", insertable = false, updatable = false)
    private Classe classe;

    public Joueur() {
    }

    public Joueur(String nom, int niveau, int id_classe, Classe classe) {
        super();
        this.nom = nom;
        this.niveau = niveau;
        this.id_classe = id_classe;
        this.classe = classe;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getNiveau() {
        return this.niveau;
    }

    public void setNiveau(int niveau) {
        this.niveau = niveau;
    }

    public int getId_classe() {
        return this.id_classe;
    }

    public void setId_classe(int id_classe) {
        this.id_classe = id_classe;
    }

    public Classe getClasse() {
        return this.classe;
    }

    public void setClasse(Classe classe) {
        this.classe = classe;
    }
    
}
