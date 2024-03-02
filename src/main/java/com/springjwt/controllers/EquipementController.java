package com.springjwt.controllers;

import com.springjwt.entities.Equipement;
import com.springjwt.entities.Station;
import com.springjwt.service.IserviceEquipement;
import com.springjwt.service.ServiceEquipement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Equipement")
public class EquipementController {

    @Autowired
    ServiceEquipement serviceEquipement;



@PostMapping("/{stationId}")
public Equipement ajouterstationetequipement(@RequestBody Equipement equipement , @PathVariable Long stationId) {
    return serviceEquipement.ajouterStationetEquipement(equipement,stationId);

}
    @PutMapping
    public Equipement modifierequipement(@RequestBody Equipement equipement ) {
        return serviceEquipement.modifierEquipement(equipement);

    }

    @DeleteMapping("/{equipementId}")
    public Equipement supprimerstation(@PathVariable Long equipementId)
    {
        serviceEquipement.supprimerEquipement(equipementId);
        return null;

    }
    @GetMapping
    public List<Equipement> affichier()
    {
        return serviceEquipement.afficher();

    }

}
