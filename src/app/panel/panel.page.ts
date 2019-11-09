import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
})
export class PanelPage implements OnInit {
  private credito: FormGroup;
  private idUser:any;

  constructor(
    private _storage : Storage, private formBuilder: FormBuilder, private _UserServicer: UserService
  ) { 
    this.credito = this.formBuilder.group({
      monto_solicitado: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this._storage.get('user').then(response => {
      this.idUser = response.id_credencial;
      console.log(this.idUser)
    });
  }

  sendRest() {
    const credit = this.credito.value;
    console.log("monto: "+credit.monto_solicitado, credit.descripcion);
    console.log('id: '+this.idUser)
    this._UserServicer.sendCredit(credit.monto_solicitado, this.idUser, credit.descripcion).subscribe(
        Response => {
          alert('se ha generado la peticion de credito: '+credit.descripcion+' con una cantidad de: '+credit.monto_solicitado);
          this.credito.reset();
        }
      )
  }
}
