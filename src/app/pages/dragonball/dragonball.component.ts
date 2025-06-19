import { Component, signal } from '@angular/core';

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

  characters = signal<Characters[]>([
    { id: 1, name:' Goku', power: 9001 },
    { id: 2, name:' Vegata', power: 8000 },
    { id: 3, name:' Piccolo', power: 3000 },
  ]);
}
