import { CondimentsDecoratorBase, DrinkBase } from '..';

export class ChocolateCondiment extends CondimentsDecoratorBase {

  protected beverage: DrinkBase;

  constructor(beverage: DrinkBase) {
    super();
    this.beverage = beverage;
    this.description = `${beverage.getDescription()} + Chocolate`;
  }

  public getCost(): number {
    return this.beverage.getCost() + 70;
  }

}
