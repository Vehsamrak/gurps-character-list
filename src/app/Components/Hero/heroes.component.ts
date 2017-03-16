import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Hero } from "../../Entities/hero";
import { HeroService } from "../../Services/hero.service";

@Component({
    selector: 'heroes-component',
    templateUrl: 'heroes.html',
    styleUrls: ['heroes.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService, private router: Router) {
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    selectHero(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/character', this.selectedHero.id]);
    }
}
