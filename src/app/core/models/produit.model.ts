import { ligneCommande } from './ligneCommande.model';
export interface Produit {
    id: number;
    nom: string;
    type: string;
    prix: number;
    stock: number;
    ligneCommande: ligneCommande;
}