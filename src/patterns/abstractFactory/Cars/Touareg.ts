// tslint:disable:no-console
import { Car } from '..';
import { CarPartsFactory } from '..';

export class Touareg extends Car {

  private carPartsFactory: CarPartsFactory;

  public constructor(carPartsFactory: CarPartsFactory) {
    super();
    this.carPartsFactory = carPartsFactory;
    this.name = 'Touareg';
    this.body = 'Big Crossover';
  }

  public configure(): void {
    this.engine = this.carPartsFactory.createEngine();
    this.bodyColor = this.carPartsFactory.createPaint();
    this.wheels = this.carPartsFactory.createWheels();

    console.log(`Configuring ${this.name}:`);
    console.log(`  > Body: ${this.body}`);
    console.log(`  > Engine: ${this.engine}`);
    console.log(`  > Body Color:  ${this.bodyColor}`);
    console.log(`  > Wheels: ${this.wheels}`);
    console.log(`----------`);
  }

}
