export interface Commande {
    id: number;
    dateCommande: Date;
    dateLivraison: Date;
    status: string;
    montant: number;
    depotId: number;
    ligneCommandesId: number;
}