// tslint:disable:no-console
import { DuckBase, NoFly, NoQuack } from '..';

export class WoodenDuck extends DuckBase {

  constructor() {
    super();
    this.flyBehavior = new NoFly();
    this.quackBehavior = new NoQuack();
  }

  public display(): void {
    console.log(`Hi! I'm a wooden duck`);
  }

}
