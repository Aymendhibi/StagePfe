package com.springjwt.service;

import com.springjwt.entities.Produit;
import com.springjwt.repositories.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ServiceProduit implements IserviceProduit{
    @Autowired
    ProduitRepository produitRepository;
    @Override
    public Produit ajouterProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public Produit modifierProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public Produit supprimerProduit(Long produitId) {
        produitRepository.deleteById(produitId);
        return null;
    }

    @Override
    public List<Produit> afficher() {
        return produitRepository.findAll();
    }
}
