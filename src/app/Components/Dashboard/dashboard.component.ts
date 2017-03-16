import { Component, OnInit } from "@angular/core";
import { Hero } from "../../Entities/hero";
import { HeroService } from "../../Services/hero.service";

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.html',
    styleUrls: ['dashboard.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));
    }
}
