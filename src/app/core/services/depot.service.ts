import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { depot } from '../models/depot.model';

@Injectable({
  providedIn: 'root'
})
export class DepotService {
  formDepot = this.fb.group({
    id: [0],
    nom: [''],
    adresse: [''],
    telephone: [''],
    commandes: [],
  });
  listDepots: depot[] = [];
  constructor(private fb: FormBuilder) { }
  // inisializeForEdit(depot: depot) { 
  //   this.formDepot.setValue({
  //     id: depot.id,
  //     nom: depot.nom,
  //     adresse: depot.adresse,
  //     telephone: depot.telephone,
  //     commandes: depot.commandes,
  //   });
  // }
  initializeForPost() { }
  afficherDepot() { }
  ajouterDepot() { }
  modifierDepot() { }
  supprimerDepot() { }
}
