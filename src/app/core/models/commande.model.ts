import { depot } from "./depot.model";
import { ligneCommande } from "./ligneCommande.model";

export interface commande {
    id: number;
    dateCommande: Date;
    dateLivraison: Date;
    status: string;
    montant: number;
    depot: depot;
    ligneCommandes: ligneCommande[];
}