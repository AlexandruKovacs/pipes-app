export enum Color {
  Black = 'Black',
  Blue = 'Blue',
  Green = 'Green',
  Red = 'Red',
  Yellow = 'Yellow',
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
