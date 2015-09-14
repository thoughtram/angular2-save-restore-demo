import {Component, View, FORM_DIRECTIVES, EventEmitter, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {RestoreService} from './restoreService';
import {Hero} from './hero';

@Component({
  selector: 'hero-editor',
  events: ['canceled', 'saved'],
  properties: ['hero'],
  bindings: [RestoreService]
})
@View({
  template: `
    <div>
      <span>Name:</span>
      <input [(ng-model)]="hero.name"/>
      <div>
        <button (click)="saved.next(hero)">save</button>
        <button (click)="onCanceled()">cancel</button>
      </div>
    </div>`,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeroEditor {
  canceled = new EventEmitter();
  saved = new EventEmitter();

  constructor(private restoreService: RestoreService<Hero>) {}

  set hero (hero: Hero) {
    this.restoreService.setItem(hero);
  }

  get hero () {
    return this.restoreService.getItem();
  }

  onSaved () {
    this.saved.next(this.restoreService.getItem());
  }

  onCanceled () {
    this.hero = this.restoreService.restoreItem();
    this.canceled.next(this.hero);
  }
}
