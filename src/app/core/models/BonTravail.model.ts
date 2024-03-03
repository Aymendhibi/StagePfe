import { reclamationCommerciale } from './reclamationCommerciale.model';
import { reclamation } from './relclamation.model';


export interface BonTravail{
    id: number;
    dateCreation: Date;
    dateCloture: Date;
    status: string;
    description: string;
    reclamationCommerciale: reclamationCommerciale;
    reclamationTechnique: reclamation;
}