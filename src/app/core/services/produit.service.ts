import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Produit } from '../models/produit.model';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  formProduit=this.fb.group({
    id:[0],
    nom : ["" , Validators.required],
    type: ["", Validators.required],
    prix: [0, Validators.required],
    stock: [0, Validators.required]
    
  });

  listProduit: Produit[] = [];
  
  constructor(private http: HttpClient, private fb: FormBuilder) { }
  initializeFormForEdit(produit: Produit) { 
    this.formProduit.setValue({
      id: produit.id,
      nom : produit.nom,
      type: produit.type,
      prix: produit.prix,
      stock: produit.stock
    });   
  }

  initializeFormForPost() { 
    this.formProduit.setValue({
      id: 0,
      nom : '',
      type: '',
      prix: 0,
      stock: 0
    });
  }
  
  listerProduit() {
    return this.http.get(environment.produitApiUrl + "/GetList");
  }

  ajouterProduit() {
    return this.http
      .post(
        environment.produitApiUrl + "/Post" ,this.formProduit.value,
        
      );
  }

  supprimerProduit() {
    return this.http.delete(
      `${environment.produitApiUrl + "/Delete" }${this.formProduit.value.id}`,
      { responseType: "text" }
    );
  }
  modifierProduit() {
    return this.http.put(
      environment.produitApiUrl + "/Put" ,this.formProduit.value,
    );
  }

  refreshList() {
    this.http.get(environment.produitApiUrl+'/GetList')
      .toPromise()
      .then(res =>this.listProduit = res as Produit[]);
  }

}
