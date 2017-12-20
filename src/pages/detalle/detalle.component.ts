import { Component, OnInit } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { Lista,ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos-service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  lista:Lista;
  indice : number;
  constructor(public navCtrl:NavController,public navParams: NavParams,public _service:ListaDeseosService,public alertCtrl:AlertController) {
    //console.log(navParams);
    //this.lista = navParams.get("lista");
    this.lista = navParams.data.lista;
    this.indice = navParams.data.index;

  }
  actualizar(item:ListaItem)
  {
    item.completada = !item.completada;
    let terminados:number = this.lista.items.filter(i=>i.completada).length;
    this.lista.terminada=false;
    if(this.lista.items.length==terminados)
      this.lista.terminada=true;
    this._service.actualizarData();
    console.log(item);
  }

  ngOnInit() {}

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'Desea elimanar el siguiente registro?',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            //console.log('Agree clicked');
            this._service.eliminarLista(this.indice);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
  borrar(){
    this.showConfirm();
  }


}
