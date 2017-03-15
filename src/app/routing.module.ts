import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from "./Components/Hero/heroes.component";
import { HeroDetailComponent } from "./Components/HeroDetail/hero-detail.component";
import { DashboardComponent } from "./Components/Dashboard/dashboard.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'characters', component: HeroesComponent },
    { path: 'character/:id', component: HeroDetailComponent },
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
