package com.springjwt.controllers;

import com.springjwt.entities.Produit;

import com.springjwt.service.ServiceProduit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/Produit")
public class ProduitController {

    @Autowired
    ServiceProduit servicproduit;


    @PostMapping
    public Produit ajouterProduit(@RequestBody Produit produit )
    {
        return  servicproduit.ajouterProduit(produit);
    }
    @PutMapping
    public  Produit modifiersation(@RequestBody Produit produit)
    {
        return  servicproduit.modifierProduit(produit);
    }



    @DeleteMapping("/{produitId}")
    public Produit supprimerstation(@PathVariable Long produitId)
    {
        servicproduit.supprimerProduit(produitId);
        return null;

    }
    @GetMapping
    public List<Produit> affichier()
    {
        return servicproduit.afficher();

    }

}
