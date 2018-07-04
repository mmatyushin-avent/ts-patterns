import { Injectable } from '@nestjs/common';

import { IDuck, SimpleDuck, RubberDuck, ExoticDuck, WoodenDuck } from '../../../patterns/strategy';

@Injectable()
export class StrategyService {

  public root(): string {
    return 'Hello from Factory';
  }

  public showDucks(): void {
    const ducks: IDuck[] = [];

    ducks.push(new SimpleDuck());
    ducks.push(new RubberDuck());
    ducks.push(new ExoticDuck());
    ducks.push(new WoodenDuck());

    for (const duck of ducks) {
      duck.display();
      duck.swim();
      duck.quack();
      duck.fly();
      // tslint:disable-next-line:no-console
      console.log(`----------`);
    }
  }

}
