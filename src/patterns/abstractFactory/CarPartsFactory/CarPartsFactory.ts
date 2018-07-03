import { Engine, Paint, Wheels } from '..';

export abstract class CarPartsFactory {

  public abstract createEngine(): Engine;
  public abstract createPaint(): Paint;
  public abstract createWheels(): Wheels;

}
