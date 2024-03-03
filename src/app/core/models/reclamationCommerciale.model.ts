import { BonTravail } from './BonTravail.model';
export interface reclamationCommerciale {
    motif: string;
    observation: string;
    fichierJustificatif: string;
    bonTravail: BonTravail;
}