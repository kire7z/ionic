import { Component, OnInit } from '@angular/core';
import { Lista,ListaItem } from '../../app/classes/index';
import { AlertController,NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos-service'
import {PendientesComponent} from '../pendientes/pendientes.component';
@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {
  nombreLista:string="";
  nombreItem:string;

  items:ListaItem[]=[];
  constructor(public alertCtrl: AlertController
             ,public _service: ListaDeseosService
             ,public navVar : NavController) {
  this.nombreItem="";
}

  ngOnInit() {}
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alerta!',
      subTitle: 'FAvor debe ingresar alguna lista!!',
      buttons: ['OK']
    });
    alert.present();
  }
  agregar(){
    if(this.nombreItem.length>0)
    {
      let item = new ListaItem(this.nombreItem);
      this.items.push(item);
      this.nombreItem = "";

    }
  }
  borrarItem(i:number){
    this.items.splice(i,1);
  }
  guardarLista()
  {
    if(this.nombreLista.length==0)
      this.showAlert();
    else
    {
      let listaNueva = new Lista(this.nombreLista);
      listaNueva.items=this.items;
      //this._service.listas.push(listaNueva);
      //this.navVar.push(PendientesComponent);
      this._service.agregarLista(listaNueva);
      this.navVar.pop();
    }
  }

}
