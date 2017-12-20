import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos-service';
import {AgregarComponent} from '../agregar/agregar.component';
import {DetalleComponent} from '../detalle/detalle.component';
import { Lista,ListaItem } from '../../app/classes/index';
@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent {
  constructor(public navCtrl: NavController,public _service:ListaDeseosService) {
  }

  irAgregar(){
    this.navCtrl.push(AgregarComponent);
  }
  verDetalle(lista:Lista,i:number)
  {
    this.navCtrl.push(DetalleComponent,{lista:lista,index:i});
  }
}
