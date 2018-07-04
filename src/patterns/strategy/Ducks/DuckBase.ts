// tslint:disable:no-console
import { IDuck, IFlyable, IQuackable, FlyWithWings, SimpleQuack } from '..';

export abstract class DuckBase implements IDuck {

  protected flyBehavior: IFlyable;
  protected quackBehavior: IQuackable;

  constructor() {
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new SimpleQuack();
  }

  public abstract display();

  public swim(): void {
    console.log(`I'm swimming`);
  }

  public fly(): void {
    this.flyBehavior.fly();
  }

  public quack(): void {
    this.quackBehavior.quack();
  }

}
