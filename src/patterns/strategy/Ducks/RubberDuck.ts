// tslint:disable:no-console
import { DuckBase, NoFly } from '..';

export class RubberDuck extends DuckBase {

  constructor() {
    super();
    this.flyBehavior = new NoFly();
  }

  public display(): void {
    console.log(`Hi! I'm a rubber duck`);
  }

}
