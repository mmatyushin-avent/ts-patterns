// tslint:disable:no-console
import { Engine } from '..';

export class DieselEngine extends Engine {

  constructor() {
    super();
  }

  public toString(): string {
    return `Engine is diesel`;
  }

}
