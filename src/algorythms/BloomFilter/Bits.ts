// tslint:disable:no-bitwise

export class Bits {

  protected bits: number[] = [];

  public set(index: number): void {
    this.bits[Math.floor(index / 32)] |= 1 << (index % 32);
  }

  public test(index: any): number {
    return (this.bits[Math.floor(index / 32)] >>> (index % 32)) & 1;
  }

}
