import { CarFactory } from '..';
import { Car, Golf, Passat, Tiguan, Touareg } from '..';
import { CarPartsFactory } from '..';
import { GermanCarPartsFactory } from '..';

export class GermanCarFactory extends CarFactory {

  protected createCar(model: string): Car {
    let car: Car;

    const carPartsFactory: CarPartsFactory = new GermanCarPartsFactory();

    switch (model) {
      case 'Golf':
        car = new Golf(carPartsFactory);
        break;
      case 'Passat':
        car = new Passat(carPartsFactory);
        break;
      case 'Tiguan':
        car = new Tiguan(carPartsFactory);
        break;
      case 'Touareg':
        car = new Touareg(carPartsFactory);
        break;
    }

    if (!car) {
      throw new Error('No such car model');
    }

    return car;
  }

}
