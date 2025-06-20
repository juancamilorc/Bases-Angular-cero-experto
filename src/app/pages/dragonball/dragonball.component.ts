import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';

interface Characters {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Characters[]>([
    { id: 1, name:' Goku', power: 9001 },
    // { id: 2, name:' Vegata', power: 8000 },
    // { id: 3, name:' Piccolo', power: 3000 },
    // { id: 4, name:' Yamcha', power: 500 },
  ]);

  addCharacter(){
    if ( !this.name() || !this.power() || this.power() <= 0 ) {
      return;
    }

    const newCharacter: Characters = {
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
