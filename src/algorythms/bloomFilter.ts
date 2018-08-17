// tslint:disable:no-console no-bitwise

/** https://habr.com/post/112069/ */

class Bits {

  protected bits: number[] = [];

  public set(index: number): void {
    this.bits[Math.floor(index / 32)] |= 1 << (index % 32);
  }

  public test(index: any): number {
    return (this.bits[Math.floor(index / 32)] >>> (index % 32)) & 1;
  }

}

class Hash {

  public static create() {
    const seed: number = Math.floor(Math.random() * 32) + 32;

    return (s: string) => {
      let result = 1;

      for (let i = 0; i < s.length; ++i) {
        result = (seed * result + s.charCodeAt(i)) & 0xFFFFFFFF;
      }

      return result;
    };
  }

}

class Bloom {

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

const fruits = new Bloom(64, [Hash.create(), Hash.create()]);
fruits.add('apple');
fruits.add('orange');

console.log(fruits.test('cabbage') ? 'Возможно фрукт.' : 'Не фрукт, инфа 100%.');
