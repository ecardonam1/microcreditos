import { Component } from '@angular/core';
import { UserService } from '../api/user.service';
import {EmailComposer, EmailComposerOptions} from '@ionic-native/email-composer'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
asunto ="prueba";
cuerpo="prueba";
destino="horaciocardona2017@gmail.com";
  private usuarios:any;
  constructor(
    private _UserService:UserService
) {}

  sendEmail(){
let email={
to:this.destino,
cc:[],
asunto: this.asunto,
cuerpo:this.cuerpo
}
  }

  ObtenerUsuarios(){
   this._UserService.getUser().subscribe(
     Response=>{
       this.usuarios = Response
       console.log(this.usuarios)
     }
   )
  }

}
