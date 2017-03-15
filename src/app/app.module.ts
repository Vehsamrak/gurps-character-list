import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from "./Components/HeroDetail/hero-detail.component";
import { HeroesComponent } from "./Components/Hero/heroes.component";
import { DashboardComponent } from "./Components/Dashboard/dashboard.component";
import { RoutingModule } from "./routing.module";

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    imports: [
        RoutingModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
