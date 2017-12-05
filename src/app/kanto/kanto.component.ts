import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './../apiservice.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.component.html',
  styleUrls: ['./kanto.component.css']
})
export class KantoComponent implements OnInit {
  pokemon;
  html_string;
  dexId;
  dex_entry;
  mon_name;
  height;
  weight;
  types;
  abilities;
  stats;


  

  constructor(private _apiserviceService: ApiserviceService) { }

  ngOnInit() {
  	this.pokemon = this._apiserviceService.getPokemon(1)
  	.then( pokemon => {
  		console.log(pokemon)
  	// this.html_string = "";
   //    for(var i = 1; i <= 151; i++) {
   //      this.html_string += '<img id="' +  [i]  + '" src="http://pokeapi.co/media/img/' + [i] + '.png" alt="">';      
   //    }
   //  $("#container").html(this.html_string);  

  	});
  }

}
