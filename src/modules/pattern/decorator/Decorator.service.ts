import { Injectable } from '@nestjs/common';
import * as util from 'util';

import { DrinkBase, BlackTea, GreenTea, Espresso, MilkCondiment, SugarCondiment } from 'patterns/decorator';

@Injectable()
export class DecoratorService {

  public root(): string {
    return 'Hello from Decorator';
  }

  public runDecorating(): void {
    const blackTea: DrinkBase = new BlackTea();
    const greenTea: DrinkBase = new GreenTea();
    const espresso: DrinkBase = new Espresso();
    const capuccino: DrinkBase = new SugarCondiment(new MilkCondiment(new Espresso()));

    // tslint:disable:no-console
    console.log(`Drink: ${blackTea.getDescription()}; Price: ${blackTea.getCost()}`);
    console.log(`Drink: ${greenTea.getDescription()}; Price: ${greenTea.getCost()}`);
    console.log(`Drink: ${espresso.getDescription()}; Price: ${espresso.getCost()}`);
    console.log(`Drink: ${capuccino.getDescription()}; Price: ${capuccino.getCost()}`);
  }

}
