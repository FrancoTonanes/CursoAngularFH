import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  @ViewChild('textBuscar') textBuscar !: ElementRef<HTMLInputElement>; //el "!" le dice a typescript que obvie la inferencia de tipos(solo usar cuando sabes que nunca será null)

  constructor( private gifsService : GifsService){

  }
  buscar(){

    const valor = this.textBuscar.nativeElement.value;

    if ( valor.trim().length === 0 ){
      return;
    }

    this.gifsService.buscarGifs( valor );

  }


}
