import { Component, signal } from '@angular/core';

interface Characters {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [],
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Characters[]>([
    { id: 1, name:' Goku', power: 9001 },
    { id: 2, name:' Vegata', power: 8000 },
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
