import { Component, OnInit } from '@angular/core';
import { Lista,ListaItem } from '../../app/classes/index';
@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {
  nombreLista:string;
  nombreItem:string;

  items:ListaItem[]=[];
  constructor() {
  this.nombreItem=""; }

  ngOnInit() {}
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

}
