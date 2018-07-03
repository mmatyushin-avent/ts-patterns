import { Car } from '..';

export abstract class CarFactory {

  protected abstract createCar(model: string): Car;

  public getCar(model: string): Car {
    const car = this.createCar(model);

    car.configure();
    // car.assembleBody();
    // car.installEngine();
    // car.paint();
    // car.installWheels();

    return car;
  }

}
