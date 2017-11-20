import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiserviceService {

  constructor(private _http: Http) { }

  getPokemon(pokemon: string) {
  	return this._http.get('https://pokeapi.co/api/v2/pokemon/')
  	.map( data => data.json() )
  	.toPromise();
  }

}
