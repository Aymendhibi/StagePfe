import { station } from "./station.model";

export interface reclamation {
    id: number;
    dateReclamation: Date;
    type: string;
    status: string;
    description: string;
    station: station;
}