// tslint:disable:no-console
import { Engine } from '..';

export class GasolineEngine extends Engine {

  constructor() {
    super();
  }

  public toString(): string {
    return `Engine is gasoline`;
  }

}
