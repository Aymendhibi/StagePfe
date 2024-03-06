import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formuser=this.fb.group({
    id:[0],
    nom : ["" , Validators.required],
    email:["" , Validators.required],
    password :["" , Validators.required],
    role:["" , Validators.required]
  });

  listuser: User[] = [];
  
  constructor(private http:HttpClient, private fb:FormBuilder) { }
  initializeFormForEdit(user: User) {
    this.formuser.setValue({
      id: user.id,
      nom : user.nom,
      email:user.email,
      password :user.password,
      role : user.role
    });
  }
  
  initializeFormForPost() {
    this.formuser.setValue({
      id: 0,
      nom : '',
      email:'',
      password :'',
      role : ''
    });
  }
  getuser() {
    return this.http.get(environment.userApiUrl + "/GetList");
  }
  Deleteuser(id:string) {
    return this.http
      .delete(`${environment.userApiUrl + "/Delete" }${id}`,
      { responseType: "text" }
      );
  }
  putuser() {
    return this.http
      .put(
        environment.userApiUrl + "/Put" ,this.formuser.value,
        
      );
  }
  insertuser() {
    return this.http
      .post(
        environment.userApiUrl + "/Post",
        this.formuser.value,
       
      );
  }

  refreshList() {
    this.http.get(environment.userApiUrl+'/GetList')
      .toPromise()
      .then(res =>this.listuser = res as User[]);
  }
}
