// tslint:disable:no-console
import { DuckBase } from '..';

export class SimpleDuck extends DuckBase {

  public display(): void {
    console.log(`Hi! I'm a simple duck`);
  }

}
