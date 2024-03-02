package com.springjwt.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReclamationTechnique extends Reclamation {
    private String equipement;
    private String natureProbleme;
    private String photo;
    @OneToOne
    private BonTravail bonTravail;

}
