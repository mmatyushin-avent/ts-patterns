import { Car, Golf, Passat, Tiguan, Touareg } from './Cars';

export class SimpleFactory {

  public getCar(type: string): Car {
    let car: Car = new Car();

    switch (type) {
      case 'Golf':
        car = new Golf();
        break;
      case 'Passat':
        car = new Passat();
        break;
      case 'Tiguan':
        car = new Tiguan();
        break;
      case 'Touareg':
        car = new Touareg();
        break;
    }

    return car;
  }

}
