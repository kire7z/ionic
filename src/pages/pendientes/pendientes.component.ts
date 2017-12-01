import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos-service';
import {AgregarComponent} from '../agregar/agregar.component';
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent  {
  constructor(public navCtrl: NavController,public _service:ListaDeseosService) {
   }
   
   irAgregar(){
     this.navCtrl.push(AgregarComponent);
   }

}
