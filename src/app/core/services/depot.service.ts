import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { depot } from '../models/depot.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DepotService {
  formDepot = this.fb.group({
    id: [0],
    nom: [''],
    adresse: [''],
    telephone: [''],
    commandeId: [0],
  });
  listDepots: depot[] = [];
  constructor(private http:HttpClient,private fb: FormBuilder) { }
  inisializeForEdit(depot: depot) { 
    this.formDepot.setValue({
      id: depot.id,
      nom: depot.nom,
      adresse: depot.adresse,
      telephone: depot.telephone,
      commandeId: depot.commandeId,
    });
  }
  initializeForPost() { 
    this.formDepot.setValue({
      id: 0,
      nom: '',
      adresse: '',
      telephone: '',
      commandeId: 0,
    });
  }
  afficherDepot() {
    return this.http.get(environment.depotApiUrl + "/GetList");
   }
  ajouterDepot() {
    return this.http
      .post(
        environment.depotApiUrl + "/ajouterProduit" ,this.formDepot.value,
      );
   }
  modifierDepot() { 
    return this.http
      .put(
        environment.depotApiUrl + "/modifierProduit" ,this.formDepot.value,
      );
  }
  supprimerDepot() {
    return this.http.delete(
      `${environment.depotApiUrl + "/supprimerProduit" }${this.formDepot.value.id}`,
      { responseType: "text" }
    );
  }
  affecterCommande() {
    return this.http
      .put(
        environment.depotApiUrl + "/affecterCommande" ,this.formDepot.value,
      );
  }
}
