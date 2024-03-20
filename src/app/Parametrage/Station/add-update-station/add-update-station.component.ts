import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import { Station } from '../../../core/models/station.model';
import { StationService } from './../../../core/services/station.service';

@Component({
  selector: 'app-add-update-station',
  standalone: true,
  imports: [MatButton,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatDialogModule],
templateUrl: './add-update-station.component.html',
  styleUrl: './add-update-station.component.scss'
})
export class AddUpdateStationComponent implements OnInit{

  inputData :any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<AddUpdateStationComponent>,
    public _stationService: StationService,
    private _toastrService: ToastrService
  ) { }
  ngOnInit(): void {
    this._stationService.refreshList();
    this.inputData = this.data
  }

  onSubmit() {
    if (this.inputData === 'Ajouter') {
      this.PostStation();
    }
    else {
      this.UpdateStation();
    }
  }

  PostStation(){
    this._stationService.ajouterStation().subscribe(res => {
      let test =res as Station;
     if (test !== null) {
        this._stationService.refreshList();
        this._toastrService.success("Station ajoutée")
       
     }
   },
    err => {
       
           }
   )
  }

  UpdateStation(){
    this._stationService.modifierStation().subscribe(res => {
      let test =res as Station;
     if (test != null) {
       this._stationService.refreshList();
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