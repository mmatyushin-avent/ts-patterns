// tslint:disable:no-console
import { IQuackable } from '..';

export class SimpleQuack implements IQuackable {

  public quack(): void {
    console.log(`Quack! Quack!`);
  }

}
