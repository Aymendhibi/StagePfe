package com.springjwt.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)

public class Reclamation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date datereclamation;
    @Enumerated(EnumType.STRING)
    private TypeDeReclamation typedereclamation;
    private String statut;
    private String description;
    private String motif;
    private String observation;
    private String fichierJustificatif;
    private String equipement;
    @Enumerated(EnumType.STRING)
    NatureProbleme natureProbleme;
    private String photo;
    @ManyToOne
    private Station station;

    @OneToOne
    private BonTravail bonTravail;

}
