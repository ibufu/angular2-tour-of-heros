/**
 * Created by lcx on 2016/1/14.
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component'

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    template: `
        <h1>{{title}}</h1>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Heroes']">Heroes</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService]
})
@RouteConfig([
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/heroes', name: 'Heroes', component: HeroesComponent},
    {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
    public title = 'Tour of Heroes';
}