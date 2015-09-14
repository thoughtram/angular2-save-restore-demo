import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {HeroEditorComponent} from './hero-editor-component';
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
      <button [hidden]="editMode" (click)="editMode = !editMode">edit</button>
    </div>
    <hero-editor-component
      (saved)="saved($event)"
      (canceled)="canceled($event)"
      [hidden]="!editMode"
      [hero]="hero">
    </hero-editor-component>
    `,
  directives: [CORE_DIRECTIVES, HeroEditorComponent]
})
export class HeroCardComponent {
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
