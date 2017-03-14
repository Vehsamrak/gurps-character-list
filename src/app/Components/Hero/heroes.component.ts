import { Component, OnInit } from '@angular/core';
import { Hero } from "../../hero";
import { HeroService } from "../../Services/hero.service";

@Component({
    selector: 'heroes-component',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css'],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onClick(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}
