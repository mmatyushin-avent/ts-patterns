import { Injectable } from '@nestjs/common';

import { CarFactory, GermanCarFactory, RussianCarFactory } from 'patterns/abstractFactory';

@Injectable()
export class AbstractFactoryService {

  public root(): string {
    return 'Hello from Factory';
  }

  public createCar(type: string) {
    const carFactory: CarFactory = this.getFactory(type);

    const cars = [
      carFactory.getCar('Golf'),
      carFactory.getCar('Passat'),
      carFactory.getCar('Tiguan'),
      carFactory.getCar('Touareg'),
    ];
    return cars;
  }

  protected getFactory(type: string): CarFactory {
    switch (type.toLowerCase()) {
      case 'germany':
        return new GermanCarFactory();
      case 'russia':
        return new RussianCarFactory();
      default:
        throw new Error(`No such type`);
    }
  }

}
