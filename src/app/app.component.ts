import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    title = 'GURPS character list';
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
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
}
