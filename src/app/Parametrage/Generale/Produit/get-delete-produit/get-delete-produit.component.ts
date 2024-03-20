import { Component, OnInit, inject } from '@angular/core';
import { Produit } from './../../../../core/models/produit.model';
import { ProduitService } from '../../../../core/services/produit.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog} from '@angular/material/dialog';
import { AddUpdateProduitComponent } from './../add-update-produit/add-update-produit.component';
import Swal from 'sweetalert2';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-get-delete-produit',
  standalone: true,
  imports: [FormsModule,CommonModule,MatButton],
templateUrl: './get-delete-produit.component.html',
  styleUrl: './get-delete-produit.component.scss'
})
export class GetDeleteProduitComponent implements OnInit{

  selectedOption = 5;
  produitService = inject(ProduitService);

  
  constructor(private dialogRef:MatDialog) { }
  ngOnInit(): void {
    this.produitService.listerProduit().subscribe(res =>{
      this.produitService.listProduit = res as Produit[]
    })
  }

  OnDelete(row :any ){
    Swal.fire({
      title: 'Ete-vous sûr de vouloir supprimer cette ligne?',
      showDenyButton: true,
      text : "Si oui, Vous ne pouvez pas récupérer cet enregistrement !",
      confirmButtonText: 'Oui, supprimer!',
      denyButtonText: `Non, laisser`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.produitService.supprimerProduit(row.id).subscribe(
          result=>{
            if (result == "delete done"){
              Swal.fire('Enregistrement supprimé!', '', 'success').then(result =>{
                if (result.isConfirmed){
                 this.produitService.listerProduit().subscribe(res =>{
                   this.produitService.listProduit = res as Produit[]
                   
                 })
                }
              })
            }
          }
        )
        
      } else if (result.isDenied) {
        Swal.fire('Enregistrement gardé', '' , 'error')
      }
    })
  }
  openComponentForPut(produit: any) {
    this.produitService.initializeFormForEdit(produit);
    this.dialogRef.open(AddUpdateProduitComponent, {
      width: '50%',
      data: {
        title :'Modifier'
      }
    })
}
  openComponentForPost() {
    this.produitService.initializeFormForPost();
    this.dialogRef.open(AddUpdateProduitComponent, {
      width: '50%',
      data: {
        title: 'Ajouter'
      }
    })
  }
}
