import { station } from "./station.model";

export interface Equipement {
    id: number;
    nom: string;
    description: string;
    station: station;
}