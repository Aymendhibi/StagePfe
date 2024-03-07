export interface BonTravail{
    id: number;
    dateCreation: Date;
    dateCloture: Date;
    status: string;
    description: string;
    reclamationCommercialeId: number;
    reclamationTechniqueId: number;
}