import { Component } from "@angular/core";
import { HeroService } from "./Services/hero.service";

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [HeroService]
})
export class AppComponent {
    title = 'GURPS character list';
}
