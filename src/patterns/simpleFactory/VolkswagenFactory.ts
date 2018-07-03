// tslint:disable:no-console
import { Car } from './Cars';
import { SimpleFactory } from './SimpleFactory';

export class VolkswagenFactory {

  private carFactory: SimpleFactory;

  constructor(factory: SimpleFactory) {
    this.carFactory = factory;
  }

  public getCar(type: string): Car {
    const car = this.carFactory.getCar(type);

    car.configure();
    car.assembleBody();
    car.installEngine();
    car.paint();
    car.installWheels();

    return car;
  }

}
