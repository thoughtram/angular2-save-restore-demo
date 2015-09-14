import {Hero} from './hero';

export class HeroesService {
  heroes: Array<Hero> = [
    { name: "Superman", superpowers: [] },
    { name: "Batman", superpowers: []
  }];

  getHeroes () {
    return this.heroes;
  }
}
