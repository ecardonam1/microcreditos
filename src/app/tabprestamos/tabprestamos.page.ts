import { Component, OnInit } from '@angular/core';

import { UserService } from '../api/user.service';

@Component({
  selector: 'app-tabprestamos',
  templateUrl: './tabprestamos.page.html',
  styleUrls: ['./tabprestamos.page.scss'],
})
export class TabprestamosPage  {
  private prestamos:any;
  constructor(
    private _UserService:UserService
  ) {}

  ObtenerPrestamos(){
    this._UserService.getPrestamos().subscribe(
      Response=>{
        this.prestamos = Response
       
      }
    )
   }

   aprobarcredito(d){
    this._UserService.putAprobar(d).subscribe(
      Response => {
        alert("se aprobo el credito del prestamo: "+d);
      }
    )
   }

   rechazarcredito(d){
    this._UserService.putRechazar(d).subscribe(
      Response => {
        alert("se rechazo el credito del prestamo: "+d);
      }
    )
   }

}
