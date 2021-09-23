import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

    private _personajes : Personaje[] = [
        {
          nombre: "Krilin",
          poder : 700,
    
        },
        {
          nombre: "Goku",
          poder : 15000,
        },
        {
          nombre: "Vegeta",
          poder : 12000
        }
      ];

    get personajes() : Personaje[] {
        return [...this._personajes];
    }

    constructor(){

    }

    agregarPersonajes( personaje : Personaje ){
        this._personajes.push(personaje);
    }
}