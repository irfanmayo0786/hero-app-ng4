import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
const  Heroes : Hero[] = [
  				{id:1,name:'Muhammad Ali Janah'},
  				{id:2,name:'Allama Iqbal'},
  				{id:3,name:'Molana Ali Johar'}
  				];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {

  title : string = 'Tour Of Heros';
  heroes : Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(h :Hero){
  	this.selectedHero=h;
  }
  getHeroes() :void{
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  getHeroo() : void {
    console.log(this.heroService.getHero());
  }
}
