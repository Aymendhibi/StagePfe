import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { User } from '../../../../core/models/user.model';
import { UserService } from '../../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { AddUpdateUsersComponent } from '../add-update-users/add-update-users.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-get-delete-users',
  standalone: true,
  imports: [FormsModule,CommonModule,MatButton],
templateUrl: './get-delete-users.component.html',
  styleUrl: './get-delete-users.component.scss'
})
export class GetDeleteUsersComponent implements OnInit{
  selectedOption = 5;
  userService = inject(UserService);
  
   constructor(private dialogRef:MatDialog) { }
  ngOnInit(): void {
    this.userService.listerUser().subscribe(res =>{
      this.userService.listUser = res as User[]
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
        this.userService.supprimerUser(row.id).subscribe(
          result=>{
            if (result == "delete done"){
              Swal.fire('Enregistrement supprimé!', '', 'success').then(result =>{
                if (result.isConfirmed){
                 this.userService.listerUser().subscribe(res =>{
                   this.userService.listUser = res as User[]
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


  
  openComponentForPost() {
    this.userService.initializeFormForPost();
    this.dialogRef.open(AddUpdateUsersComponent, {
      width: '40%',
      data: {
        title: 'Ajouter'
      }
    })
  }
  openComponentForPut(user: User) {
    this.userService.initializeFormForEdit(user);
    this.dialogRef.open(AddUpdateUsersComponent, {
      width: '40%',
      data: 'Modifier'
    })
  }
}

