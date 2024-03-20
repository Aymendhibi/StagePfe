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
    id: 0,
    nom: [""],
    adresse: [""],
    telephone: [""],
    email: [""],
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
    })
  }
  initializeFormForPost() {
    this.formStation.setValue({
      id: 0,
      nom: '',
      adresse: '',
      telephone: '',
      email: '',
    })
  }
  listerStation() {
    return this.http.get(environment.stationApiUrl );
  }
  ajouterStation() {
    return this.http
      .post(
        environment.stationApiUrl ,this.formStation.value,
      );
  }
  supprimerStation(id:number) {
    return this.http.delete(
      `${environment.stationApiUrl}/${id}`,
      { responseType: "text" }
    );
  }
  affecterReclamationToStation(reclamation: reclamation, id: number) {
    return this.http
      .put(
        `${environment.stationApiUrl}${id}`, reclamation,
      );
  }
  modifierStation() {
    return this.http.put(
      environment.stationApiUrl, this.formStation.value
    );
  }
  refreshList() {
    this.http.get(environment.stationApiUrl)
      .toPromise()
      .then(res =>this.listStation = res as Station[]);
  }
}
