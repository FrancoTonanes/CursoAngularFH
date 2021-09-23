import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[] = ["Spiderman", "Dr. Strange", "Ironman", "Clark Kent"];
  heroeBorrado: string = '';
  borrar() : void {
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
