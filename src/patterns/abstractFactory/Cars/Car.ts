// tslint:disable:no-console
import { Engine, Paint, Wheels } from '..';

export abstract class Car {

  protected name: string;
  protected engine: Engine;
  protected bodyColor: Paint;
  protected wheels: Wheels;
  protected body: string = 'Caravan';

  public abstract configure(): void;

  public assembleBody(): void {
    console.log(`Body is assembled`);
  }

  public installEngine(): void {
    console.log(`Engine is in its place`);
  }

  public paint(): void {
    console.log(`Car is painted`);
  }

  public installWheels(): void {
    console.log(`Wheels are in its place`);
  }

}
