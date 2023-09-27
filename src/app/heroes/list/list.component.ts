import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spidermnan', 'Ironman','Hulk','Thor','She hulk'];
  public heroeBorrado?: string='';

  removeLastHero(): void {
  this.heroeBorrado = this.heroNames.pop();
  }

  returnHeroes(): void{
    this.heroNames=['Spidermnan', 'Ironman','Hulk','Thor','She hulk'];
  }

}
