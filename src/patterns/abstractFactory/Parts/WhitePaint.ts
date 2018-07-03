// tslint:disable:no-console
import { Paint } from '..';

export class WhitePaint extends Paint {

  constructor() {
    super();
  }

  public toString(): string {
    return `Paint is white`;
  }

}
