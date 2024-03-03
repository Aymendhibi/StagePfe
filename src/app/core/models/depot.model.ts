import { commande } from "./commande.model";

export interface depot {
    id: number;
    nom: string;
    adresse: string;
    telephone: string;
    commandes: commande[];
}