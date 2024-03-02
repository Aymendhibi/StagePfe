package com.springjwt.controllers;

import com.springjwt.entities.Depot;
import com.springjwt.entities.Produit;
import com.springjwt.service.ServiceDepot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/Depot")

public class DepotController {

    @Autowired
    ServiceDepot serviceDepot;




    @PostMapping
    public Depot ajouterProduit(@RequestBody Depot  depot )
    {
        return  serviceDepot.ajouterDepot(depot);
    }
    @PutMapping
    public  Depot modifiersation(@RequestBody Depot  depot)
    {
        return  serviceDepot.modifierDepot(depot);
    }



    @DeleteMapping("/{depotId}")
    public Depot supprimerstation(@PathVariable Long depotId)
    {
        serviceDepot.supprimerDepot(depotId);
        return null;

    }
    @GetMapping
    public List<Depot> affichier()
    {
        return serviceDepot.afficher();

    }

}
