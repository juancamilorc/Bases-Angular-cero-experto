import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import type { Character } from '../../interfaces/character.interface';

@Component({
  imports: [CharacterListComponent],
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name:' Goku', power: 9001 },
    { id: 2, name:' Vegata', power: 8000 },
  ]);

  addCharacter(){
    if ( !this.name() || !this.power() || this.power() <= 0 ) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update( (list) => [...list, newCharacter ]);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);

  }
}
