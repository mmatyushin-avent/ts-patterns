// tslint:disable:no-console
import { Paint } from '..';

export class BlackPaint extends Paint {

  constructor() {
    super();
  }

  public toString(): string {
    return `Paint is black`;
  }

}
