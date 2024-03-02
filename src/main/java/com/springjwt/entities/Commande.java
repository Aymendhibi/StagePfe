package com.springjwt.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date dateCommande;
    private Date dateLivraison;
    private String statut;
    private double montant;
    @ManyToOne
    private Depot depot;
    @OneToMany(cascade = CascadeType.ALL, mappedBy="commande")
    private Set<LigneCommande> LigneCommandes;

}
