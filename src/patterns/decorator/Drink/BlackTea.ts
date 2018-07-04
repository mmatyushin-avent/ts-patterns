import { DrinkBase } from '..';

export class BlackTea extends DrinkBase {

  constructor() {
    super();
    this.description = 'Black Leaf Tea';
  }

  public getCost(): number {
    return 110;
  }

}
