import { Injectable } from '@angular/core';
import { Lista } from '../classes/listas';
@Injectable()
export class ListaDeseosService {
  listas:Lista[]=[];
  constructor() {
    /*let lista1:Lista = new Lista('Compras supermercado');
    let lista2:Lista = new Lista('Cuarenta estanco');
    let lista3:Lista = new Lista('Ejercicios');
    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);*/
    this.cargarData();
    console.log("servicio inicializado");
  }
  actualizarData()
  {
    localStorage.setItem("data",JSON.stringify(this.listas));
  }
  cargarData()
  {
    if(localStorage.getItem("data")!==undefined&&localStorage.getItem("data")!=null)
      this.listas = JSON.parse(localStorage.getItem("data"));
  }
  agregarLista(lista:Lista)
  {
    this.listas.push(lista);
    this.actualizarData();
  }
  eliminarLista(idx:number)
  {
    this.listas.splice(idx,1);
    this.actualizarData();
  }

}
