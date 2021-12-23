import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {

  constructor( private paisService : PaisService ) { }


  termino : string = '';
  hayError: boolean = false;
  paises  : Pais[] = []; 
  
  buscar( termino : string ){

    this.hayError = false;
    this.termino = termino;


    this.paisService.buscarCapital(this.termino)
    .subscribe( (paises:Pais[]) => {

      this.paises = paises;
      
      
    }, (err) => {

      this.hayError = true;
      console.log('Error');
      console.log(err);
      this.paises = [];
    })
  }


}
