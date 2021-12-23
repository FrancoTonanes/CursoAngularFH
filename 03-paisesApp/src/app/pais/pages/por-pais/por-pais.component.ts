import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    
    `
  ]
})
export class PorPaisComponent  {


  termino         : string = '';
  hayError        : boolean = false;
  paises          : Pais[] = []; 
  paisesSugeridos : Pais[] = [];
  mostrarSugerencia : boolean = false;
  
  sugerencias( termino : string){
    this.mostrarSugerencia = true;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais( termino )
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0,5),
        (err) => this.paisesSugeridos = []
      );

  }
  buscar( termino : string ){

    this.mostrarSugerencia = false;

    this.hayError = false;
    this.termino = termino;


    this.paisService.buscarPais(this.termino)
    .subscribe( (paises:Pais[]) => {

      this.paises = paises;
      
      
    }, (err) => {

      this.hayError = true;
      console.log('Error');
      console.log(err);
      this.paises = [];
    })
  }

  constructor( private paisService : PaisService ) { 

  }


}
