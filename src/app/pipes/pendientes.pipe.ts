import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../classes/index';

@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  transform(listas:Lista[],completa:boolean): Lista[] {
    let listaFiltrada:Lista[]=[]
    listaFiltrada = listas.filter(l=>l.terminada==completa);
    return listaFiltrada;
  }
}
