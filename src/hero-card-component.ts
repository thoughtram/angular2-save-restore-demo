import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero';

@Component({
  selector: 'hero-card-component',
  properties: ['hero']
})
@View({
  template: `
    <div>
      <span>Name:</span>
      <span>{{hero.name}}</span>
    </div>`,
  directives: [CORE_DIRECTIVES]
})
export class HeroCardComponent {
  hero: Hero;
}
