import { Injectable } from '@nestjs/common';

import { SimpleFactory, VolkswagenFactory } from 'patterns/simpleFactory';

@Injectable()
export class SimpleFactoryService {

  public root(): string {
    return 'Hello from Factory';
  }

  public createCar() {
    const volkswagenFactory = new VolkswagenFactory(new SimpleFactory());
    const cars = [
      volkswagenFactory.getCar('Golf'),
      volkswagenFactory.getCar('Passat'),
      volkswagenFactory.getCar('Tiguan'),
      volkswagenFactory.getCar('Touareg'),
    ];
    return cars;
  }

}
