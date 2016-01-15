import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HeroService} from './hero.service'
import {enableProdMode} from 'angular2/core';

enableProdMode();

bootstrap(AppComponent, [
    HeroService,
    ROUTER_PROVIDERS
]);