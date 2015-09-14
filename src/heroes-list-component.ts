import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {HeroesService} from './heroes-service';
import {HeroCardComponent} from './hero-card-component';
import {HeroEditorComponent} from './hero-editor-component';
import {Hero} from './hero';

@Component({
  selector: 'heroes-list-component'
})
@View({
  template: `
    <div>
      <ul>
        <li *ng-for="#editItem of heroes">
          <hero-card-component
            [hidden]="editItem.editing"
            [hero]="editItem.item">
          </hero-card-component>
          <button
            [hidden]="editItem.editing"
            (click)="editItem.editing = true">
              edit
          </button>
          <hero-editor-component
            (saved)="onSaved(editItem, $event)"
            (canceled)="onCanceled(editItem)"
            [hidden]="!editItem.editing"
            [hero]="editItem.item">
          </hero-editor-component>
        </li>
      </ul>
    </div>`,
  directives: [CORE_DIRECTIVES, HeroCardComponent, HeroEditorComponent]
})
export class HeroesListComponent {
  heroes: Array<Hero>;
  constructor(heroesService: HeroesService) {
    this.heroes = heroesService.getHeroes()
                               .map(item => new EditItem(item));
  }

  onSaved (editItem: EditItem<Hero>, updatedHero: Hero) {
    editItem.item = updatedHero;
    editItem.editing = false;
  }

  onCanceled (editItem: EditItem<Hero>) {
    editItem.editing = false;
  }
}

class EditItem<T> {
  item: T;
  editing: boolean
  constructor (public item T) {}
}

bootstrap(HeroesListComponent, [HeroesService]);
