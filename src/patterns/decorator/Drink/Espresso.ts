import { DrinkBase } from '..';

export class Espresso extends DrinkBase {

  constructor() {
    super();
    this.description = 'Espresso';
  }

  public getCost(): number {
    return 175;
  }

}
