import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeroDetailComponent } from "./Components/HeroDetail/hero-detail.component";
import { HeroesComponent } from "./Components/Hero/heroes.component";
import { DashboardComponent } from "./Components/Dashboard/dashboard.component";

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'characters',
                component: HeroesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
