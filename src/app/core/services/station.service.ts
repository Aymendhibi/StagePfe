import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Station } from '../models/station.model';
import { reclamation } from './../models/relclamation.model';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  formStation=this.fb.group({
    id: [0],
    nom: [""],
    adresse: [""],
    telephone: [""],
    email: [""],
    reclamationId: [0]
  });
  listStation: Station[] = [];
  
  constructor(private http: HttpClient, private fb: FormBuilder,) { }
  initializeFormForEdit(station: Station) {
    this.formStation.setValue({
      id: station.id,
      nom: station.nom,
      adresse: station.adresse,
      telephone: station.telephone,
      email: station.email,
      reclamationId: station.reclamationId
    })
  }
  initializeFormForPost() {
    this.formStation.setValue({
      id: 0,
      nom: '',
      adresse: '',
      telephone: '',
      email: '',
      reclamationId: 0
    })
  }
  listerStation() {
    return this.http.get(environment.stationApiUrl + "/GetList");
  }
  ajouterStation() {
    return this.http
      .post(
        environment.stationApiUrl + "/Post" ,this.formStation.value,
      );
  }
  supprimerStation() {
    return this.http.delete(
      `${environment.stationApiUrl + "/Delete" }${this.formStation.value.id}`,
      { responseType: "text" }
    );
  }
  affecterReclamationToStation(reclamation: reclamation, id: number) {
    return this.http
      .put(
        `${environment.stationApiUrl + "/AffecterReclamation" }${id}`, reclamation,
      );
  }
  modifierStation() {
    return this.http.put(
      environment.stationApiUrl + "/Put", this.formStation.value
    );
  }
  
}
