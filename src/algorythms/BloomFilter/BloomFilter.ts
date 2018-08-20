//

import { Bits } from './Bits';

export class BloomFilter {

  protected bits = new Bits();
  protected size;
  protected functions;

  constructor(size, functions) {
    this.size = size;
    this.functions = functions;
  }

  public add(s: string) {
    for (const func of this.functions) {
      this.bits.set(func(s) % this.size);
    }
  }

  public test(s: string) {
    for (const func of this.functions) {
      if (!this.bits.test(func(s) % this.size)) {
        return false;
      }
      return true;
    }
  }

}
