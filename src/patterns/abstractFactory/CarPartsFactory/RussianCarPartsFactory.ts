import { CarPartsFactory } from '..';
import { Engine, GasolineEngine, Paint, WhitePaint, Wheels, MediumWheels } from '..';

export class RussianCarPartsFactory extends CarPartsFactory {

  public createEngine(): Engine {
    return new GasolineEngine();
  }

  public createPaint(): Paint {
    return new WhitePaint();
  }

  public createWheels(): Wheels {
    return new MediumWheels();
  }

}
