// tslint:disable:no-console
import { IFlyable } from '..';

export class FlyWithWings implements IFlyable {

  public fly(): void {
    console.log(`I'm flying with my wings`);
  }

}
