import { DrinkBase } from '..';

export class GreenTea extends DrinkBase {

  constructor() {
    super();
    this.description = 'Green Leaf Tea';
  }

  public getCost(): number {
    return 125;
  }

}
