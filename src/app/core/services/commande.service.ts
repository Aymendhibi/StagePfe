import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  formCommande = this.fb.group({
    id: [0],
    date: [''],
    dateCommande: [''],
    dateLivraison: [''],
    status: [''],
    montant: [0],
    depotId: [0],
    
  });

  constructor(private http:HttpClient, private fb: FormBuilder) { }
}
