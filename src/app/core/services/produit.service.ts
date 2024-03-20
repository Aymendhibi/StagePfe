import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Produit } from '../models/produit.model';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  formProduit = this.fb.group({
    id : [0, Validators.required],
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
      prix: null,
      stock: null
    });
  }
  
  listerProduit() {
    return this.http.get(environment.produitApiUrl);
  }

  ajouterProduit() {
    return this.http
      .post(
        environment.produitApiUrl,this.formProduit.value,
        
      );
  }

  supprimerProduit(id:number) {
    return this.http.delete(
      `${environment.produitApiUrl}/${id}`,
      { responseType: "text" }
    );
  }
  modifierProduit() {
    return this.http.put(
      environment.produitApiUrl ,this.formProduit.value,
    );
  }

  refreshList() {
    this.http.get(environment.produitApiUrl)
      .toPromise()
      .then(res =>this.listProduit = res as Produit[]);
  }

}
