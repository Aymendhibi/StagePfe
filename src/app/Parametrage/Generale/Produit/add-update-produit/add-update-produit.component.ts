import { Component, OnInit, Inject } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProduitService } from '../../../../core/services/produit.service';
import { Produit } from '../../../../core/models/produit.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-update-produit',
  standalone: true,
  imports: [MatButton,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatDialogModule],
  templateUrl: './add-update-produit.component.html',
  styleUrl: './add-update-produit.component.scss'
})
export class AddUpdateProduitComponent implements OnInit{

  inputData :any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<AddUpdateProduitComponent>,
    public _produitService: ProduitService,
    private _toastrService: ToastrService
  ) { }
  ngOnInit(): void {
    this._produitService.refreshList();
    this.inputData = this.data
  }

  onSubmit() {
    if (this.inputData.title === 'Ajouter') {
      this.PostProduit();
    }
    else if (this.inputData.title === 'Modifier') {
      this.UpdateProduit();
    }
  }

  PostProduit(){
    this._produitService.ajouterProduit().subscribe(res => {

      let test =res as Produit;
     if (test != null) {
        this._produitService.refreshList();
        this._toastrService.success("Produit ajoutée")
       
     }
   },
    err => {
       
           }
   )
  }

  UpdateProduit(){
    this._produitService.modifierProduit().subscribe(res => {
      let test =res as Produit;
     if (test != null) {
       this._produitService.refreshList();
       this._toastrService.success("Affectation modifiée")
       
     }
   },
    err => {
       
           }
   )
  }

  closePopup() {
    this.ref.close();
  }
}
