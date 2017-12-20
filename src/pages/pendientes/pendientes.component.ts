import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos-service';
import {AgregarComponent} from '../agregar/agregar.component';
import {DetalleComponent} from '../detalle/detalle.component';
import { Lista,ListaItem } from '../../app/classes/index';
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent  {

    lista2 :Lista[]=[];
  constructor(public navCtrl: NavController,public _service:ListaDeseosService) {
    //debugger;
    this.lista2 =this._service.listas.filter(l=>!l.terminada);

   }

   irAgregar(){
     this.navCtrl.push(AgregarComponent);
   }
   verDetalle(lista:Lista,i:number)
   {
     //debugger;
     this.navCtrl.push(DetalleComponent,{lista:lista,index:i});
   }
}
