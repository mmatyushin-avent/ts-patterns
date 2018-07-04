import { CondimentsDecoratorBase, DrinkBase } from '..';

export class SugarCondiment extends CondimentsDecoratorBase {

  protected beverage: DrinkBase;

  constructor(beverage: DrinkBase) {
    super();
    this.beverage = beverage;
    this.description = `${beverage.getDescription()} + Sugar`;
  }

  public getCost(): number {
    return this.beverage.getCost() + 10;
  }

}
