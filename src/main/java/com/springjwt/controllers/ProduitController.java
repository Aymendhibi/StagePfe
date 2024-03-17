package com.springjwt.controllers;

import com.springjwt.entities.Category;
import com.springjwt.entities.Produit;

import com.springjwt.service.ServiceProduit;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public  Produit modifierproduit(@RequestBody Produit produit)
    {
        return  servicproduit.modifierProduit(produit);
    }



    @DeleteMapping("/{produitId}")
    public Produit supprimerproduit(@PathVariable Long produitId)
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
