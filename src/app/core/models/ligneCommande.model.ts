import { commande } from "./commande.model";
import { Produit } from "./produit.model";

export interface ligneCommande {
    id: number;
    quantite: number;
    prix: number;
    prixUnitaire: number;
    produit:Produit;
    commande: commande;
}