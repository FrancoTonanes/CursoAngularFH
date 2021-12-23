import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl : string = 'http://api.countrylayer.com/v2';
  private apiKey : string = '5ae6a931d0cd132ca8dfc6f9094db671';

  constructor( private http : HttpClient ) {

   }

   buscarPais( termino : string ) : Observable<Pais[]> {
     const url : string = `${this.apiUrl}/name/${termino}?access_key=${this.apiKey}`;
     return this.http.get<Pais[]>( url );
   }
   buscarCapital( termino : string ) : Observable<Pais[]> {
    const url : string = `${this.apiUrl}/capital/${termino}?access_key=${this.apiKey}`;
    return this.http.get<Pais[]>( url );     
   }
   getPaisByCode ( id : string ) : Observable<Pais> {
    const url : string = `${this.apiUrl}/alpha/${id}?access_key=${this.apiKey}`;
    return this.http.get<Pais>( url );     
   }
   getPaisByRegion( id : string ) : Observable<Pais[]> {
    const url : string = `${this.apiUrl}/region/${id}?access_key=${this.apiKey}`;
    return this.http.get<Pais[]>( url );     
   }
}
