import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeHolder'
})
export class PlaceHolderPipe implements PipeTransform {
  transform(value: string, args: any[]): string {    
    let _default:string="Lista Vacia";
    if(args!=undefined&&args.length>0)
      _default= args[0];
    if(value===null||value===undefined||value.length==0)
      return _default;
    else
      return value;
  }
}
