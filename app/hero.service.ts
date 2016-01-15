/**
 * Created by lcx on 2016/1/14.
 */
import {HEROES} from './mock-heroes'
import {Injectable} from 'angular2/core';

@Injectable()

export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHero(id: number) {
        return Promise.resolve(HEROES)
            .then(heroes => heroes.filter(h => h.id === id)[0]);
    }
}