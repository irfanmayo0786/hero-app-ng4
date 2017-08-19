import { Component } from '@angular/core';
import { Hero } from './hero';

const  Heroes : Hero[] = [
  				{id:1,name:'Muhammad Ali Janah'},
  				{id:2,name:'Allama Iqbal'},
  				{id:3,name:'Molana Ali Johar'}
  				];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Tour Of Heros';
  heroes = Heroes;
  selectedHero: Hero;
  onSelect(h :Hero){
  	this.selectedHero=h;
  }
}
