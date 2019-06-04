import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectorHero: Hero;
  heroes = HEROES;
  // hero = 'IronMan';

  constructor() { }

  ngOnInit() {
  }

  selectHero: Hero;
  onSelect(hero: Hero): void {
      this.selectHero = hero;
  }

}
