// tslint:disable:no-bitwise

export class HashFuncFabric {

  public static create(): (s: string) => number {
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
