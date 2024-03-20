import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formUser = this.fb.group({
    id : [0,Validators.required],
    name : ["" , Validators.required],
    email:["" , Validators.required],
    password :["" , Validators.required],
    role:[""]
  });

  listUser: User[] = [];
  
  constructor(private http:HttpClient, private fb:FormBuilder) { }
  initializeFormForEdit(user: User) {
    this.formUser.patchValue({
      id : user.id,
      name : user.name,
      email : user.email,
      password :'',
      role : user.role
    });
  }
  
  initializeFormForPost() {
    this.formUser.setValue({
      id : 0,
      name : '',
      email:'',
      password :'',
      role : ''
    });
  }
  listerUser() {
    return this.http.get(environment.userApiUrl + "afficheruser");
  }
  supprimerUser(id:number) {
    return this.http
      .delete(`${environment.userApiUrl}${id}`,
      { responseType: "text" }
      );
  }
  modifierUser() {
    return this.http
      .put(
        environment.userApiUrl + "modifieruser" ,this.formUser.value,
        
      );
  }
  ajouterUser() {
    return this.http
      .post(
        environment.userApiUrl + "sign-up",
        this.formUser.value,
       
      );
  }

  refreshList() {
    this.http.get(environment.userApiUrl+'afficheruser')
      .toPromise()
      .then(res =>this.listUser = res as User[]);
  }
}
