import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {HeroEditor} from './heroEditor';
import {Hero} from './hero';

@Component({
  selector: 'hero-card',
  properties: ['hero']
})
@View({
  template: `
    <div>
      <span>Name:</span>
      <span>{{hero.name}}</span>
      <button [hidden]="editMode" (click)="editMode = !editMode">edit</button>
    </div>
    <hero-editor
      (saved)="saved($event)"
      (canceled)="canceled($event)"
      [hidden]="!editMode"
      [hero]="hero">
    </hero-editor>
    `,
  directives: [CORE_DIRECTIVES, HeroEditor]
})
export class HeroCard {
  hero: Hero;
  editMode: boolean

  saved (updatedHero: Hero) {
    this.hero = updatedHero;
    this.editMode = false;
  }

  canceled (previousHero: Hero) {
    this.editMode = false;
  }
}
