import { Component, OnInit, inject } from '@angular/core';
import { Station } from '../../../core/models/station.model';
import { StationService } from '../../../core/services/station.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { AddUpdateStationComponent } from '../add-update-station/add-update-station.component';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-get-delete-station',
  standalone: true,
  imports: [FormsModule,CommonModule,MatButton],
  templateUrl: './get-delete-station.component.html',
  styleUrl: './get-delete-station.component.scss'
})
export class GetDeleteStationComponent implements OnInit{
  selectedOption = 5;
  stationService = inject(StationService);

  
  constructor(private dialogRef:MatDialog) { }
  ngOnInit(): void {
    this.stationService.listerStation().subscribe(res =>{
      this.stationService.listStation = res as Station[]
    })
  }
onDelete(row :any ){
    Swal.fire({
      title: 'Ete-vous sûr de vouloir supprimer cette ligne?',
      showDenyButton: true,
      text : "Si oui, Vous ne pouvez pas récupérer cet enregistrement !",
      confirmButtonText: 'Oui, supprimer!',
      denyButtonText: `Non, laisser`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.stationService.supprimerStation(row.id).subscribe(
          result=>{
            if (result == "delete done"){
              Swal.fire('Enregistrement supprimé!', '', 'success').then(result =>{
                if (result.isConfirmed){
                 this.stationService.listerStation().subscribe(res =>{
                   this.stationService.listStation = res as Station[]
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


  openComponentForPut(station: Station) {
    this.stationService.initializeFormForEdit(station);
    this.dialogRef.open(AddUpdateStationComponent, {
      width: '50%',
      data: 'Modifier'
    })
}
  openComponentForPost() {
    this.stationService.initializeFormForPost();
    this.dialogRef.open(AddUpdateStationComponent, {
      width: '50%',
      data: {
        title: 'Ajouter'
      }
    })
  }
}
