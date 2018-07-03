import { CarPartsFactory } from '..';
import { Engine, DieselEngine, Paint, BlackPaint, Wheels, BigWheels } from '..';

export class GermanCarPartsFactory extends CarPartsFactory {

  public createEngine(): Engine {
    return new DieselEngine();
  }

  public createPaint(): Paint {
    return new BlackPaint();
  }

  public createWheels(): Wheels {
    return new BigWheels();
  }

}
