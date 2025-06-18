import { Component, signal } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [CommonModule],
  styles: ``,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  getHeroDescription( ) {
    return `${ this.name() } - ${ this.age() }`;
  }

  changeHero(){
    this.name.set('Spiderman');
  }

  changeAge() {
    this.age.set(60)
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45)
  }
}
