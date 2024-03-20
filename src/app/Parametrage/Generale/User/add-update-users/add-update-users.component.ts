import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../../../core/models/user.model';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { Role } from '../../../../core/models/role.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-update-users',
  standalone: true,
  imports: [MatDialogModule,MatButton,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatSelectModule,CommonModule],
  templateUrl: './add-update-users.component.html',
  styleUrl: './add-update-users.component.scss'
})
export class AddUpdateUsersComponent implements OnInit{

  inputData :any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<AddUpdateUsersComponent>,
    public _userService: UserService,
    private _toastrService: ToastrService,
  ) { }
  
  roles: Role[] = [
    {value: 'Administrateur', viewValue: 'Administrateur'},
    {value: 'Gerant', viewValue: 'Gerant'},
    {value: 'Responsable', viewValue: 'Responsable'},
    {value: 'Technicien', viewValue: 'Technicien'},
  ];
  
  ngOnInit(): void {
    this._userService.refreshList();
    this.inputData = this.data
  }

  onSubmit() {
    if (this.inputData.title === 'Ajouter') {
      this.PostUser();
    }
    else {
      this.UpdateUser();
    }
  }

  PostUser(){
    this._userService.ajouterUser().subscribe(res => {
      let test =res as User;
     if (test != null) {
        this._userService.refreshList();
        this._toastrService.success("user ajoutée")
       
     }
   },
    err => {
       
           }
   )
  }

  UpdateUser(){
    this._userService.modifierUser().subscribe(res => {
      let test =res as User;
     if (test != null) {
       this._userService.refreshList();
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
