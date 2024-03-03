import { reclamation } from "./relclamation.model";

export interface station {
    id: number;
    nom: string;
    adresse: string;
    telephone: string;
    email: string;
    reclamations: reclamation[];
}