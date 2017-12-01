import {ListaItem} from './lista-item';
export class Lista{
  nombre:string;
  terminada:boolean;
  items:ListaItem[];
  constructor(nombre:string){
    this.terminada=false;
    this.nombre = nombre;
    this.items = [];
  }
}
