import { Component, Input } from '@angular/core';
import { Hero } from "../../Entities/hero";

@Component({
    selector: 'hero-detail',
    templateUrl: 'hero-detail.html',
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
