/**
 * Created by lcx on 2016/1/14.
 */
import {Component} from 'angular2/core';
import {Hero} from './Hero';
import {HeroService} from './hero.service'
import {Router} from "angular2/router";



@Component({
    selector: 'my-dashboard',
    styleUrls: ['app/dashboard.component.css'],
    templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent {
    public heroes: Hero[] = [];
    constructor(private _heroService: HeroService, private _router: Router) {};

    ngOnInit(){
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(hero: Hero) {
        this._router.navigate(['HeroDetail', {id: hero.id}]);
    }

}