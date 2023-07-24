import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpper: boolean = false;
  public sortBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.Blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.Black
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.Green
    },
  ];

  public toggleUpperCase(): void {
    this.isUpper = !this.isUpper;
  }

  public changeSortBy(sortBy: keyof Hero): void {
    this.sortBy = sortBy;
  }

}
