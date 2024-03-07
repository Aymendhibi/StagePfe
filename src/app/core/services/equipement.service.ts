import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Equipement } from '../models/equipement.model';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  formEquipement = this.fb.group({
    id: 0,
    nom: '',
    description: '',
    stationId: 0
  });

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  initializeFormForEdit(equipement:Equipement) { 
    this.formEquipement.setValue({
      id: equipement.id,
      nom: equipement.nom,
      description: equipement.description,
      stationId: equipement.stationId
    })
  }
  initializeFormForPost() { 
    this.formEquipement.setValue({
      id: 0,
      nom: '',
      description: '',
      stationId: 0
    })
  }
  listerEquipement() {
    return this.http.get(environment.equipementApiUrl + "/GetList");
  }
  ajouterEquipement() {
    return this.http
      .post(
        environment.equipementApiUrl + "/Post" ,this.formEquipement.value,
      );
  }
  supprimerEquipement() {
    return this.http.delete(
      `${environment.equipementApiUrl + "/Delete" }${this.formEquipement.value.id}`,
      { responseType: "text" }
    );
  }
  modifierEquipement() {
    return this.http.put(
      environment.equipementApiUrl + "/Put", this.formEquipement.value
    );
  }

  getEquipementById(id: number) {
    return this.http.get<Equipement>(`${environment.equipementApiUrl + "/GetById" }${id}`);
  }
  getEquipementByStationId(id: number) {
    return this.http.get<Equipement[]>(`${environment.equipementApiUrl + "/GetByStationId" }${id}`);
  }
  getEquipementByNom(nom: string) {
    return this.http.get<Equipement[]>(`${environment.equipementApiUrl + "/GetByNom" }${nom}`);
  }
  affecterEquipementToStation(equipement: Equipement, id: number) {
    return this.http
      .put(
        `${environment.equipementApiUrl + "/AffecterStation" }${id}`,equipement
      );
  }
}
