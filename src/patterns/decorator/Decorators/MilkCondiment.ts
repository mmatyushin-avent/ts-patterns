import { CondimentsDecoratorBase, DrinkBase } from '..';

export class MilkCondiment extends CondimentsDecoratorBase {

  protected beverage: DrinkBase;

  constructor(beverage: DrinkBase) {
    super();
    this.beverage = beverage;
    this.description = `${beverage.getDescription()} + Milk`;
  }

  public getCost(): number {
    return this.beverage.getCost() + 50;
  }

}
