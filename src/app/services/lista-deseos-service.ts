import { Injectable } from '@angular/core';
import { Lista } from '../classes/listas';
@Injectable()
export class ListaDeseosService {
  listas:Lista[]=[];
  constructor() {
    let lista1:Lista = new Lista('Compras supermercado');
    let lista2:Lista = new Lista('Cuarenta estanco');
    let lista3:Lista = new Lista('Ejercicios');
    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);
    console.log("servicio inicializado");    
  }
}
