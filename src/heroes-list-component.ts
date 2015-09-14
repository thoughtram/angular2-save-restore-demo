import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {HeroesService} from './heroes-service';
import {HeroCardComponent} from './hero-card-component';
import {Hero} from './hero';

@Component({
  selector: 'heroes-list-component'
})
@View({
  template: `
    <div>
      <ul>
        <li *ng-for="#hero of heroes">
          <hero-card-component [hero]="hero"></hero-card-component>
        </li>
      </ul>
    </div>`,
  directives: [CORE_DIRECTIVES, HeroCardComponent]
})
export class HeroesListComponent {
  heroes: Array<Hero>;
  constructor(heroesService: HeroesService) {
    this.heroes = heroesService.getHeroes();
  }
}

bootstrap(HeroesListComponent, [HeroesService]);
