// tslint:disable:no-console
import { CarFactory } from './CarFactory/CarFactory';
import { GermanCarFactory } from './CarFactory/GermanCarFactory';
import { RussianCarFactory } from './CarFactory/RussianCarFactory';

import { CarPartsFactory } from './CarPartsFactory/CarPartsFactory';
import { GermanCarPartsFactory } from './CarPartsFactory/GermanCarPartsFactory';
import { RussianCarPartsFactory } from './CarPartsFactory/RussianCarPartsFactory';

import { Car } from './Cars/Car';
import { Golf } from './Cars/Golf';
import { Passat } from './Cars/Passat';
import { Tiguan } from './Cars/Tiguan';
import { Touareg } from './Cars/Touareg';

import { Engine } from './Parts/Engine';
import { DieselEngine } from './Parts/DieselEngine';
import { GasolineEngine } from './Parts/GasolineEngine';
import { Paint } from './Parts/Paint';
import { BlackPaint } from './Parts/BlackPaint';
import { WhitePaint } from './Parts/WhitePaint';
import { Wheels } from './Parts/Wheels';
import { BigWheels } from './Parts/BigWheels';
import { MediumWheels } from './Parts/MediumWheels';

export {
  CarFactory,
  GermanCarFactory,
  RussianCarFactory,

  CarPartsFactory,
  GermanCarPartsFactory,
  RussianCarPartsFactory,

  Car,
  Golf,
  Passat,
  Tiguan,
  Touareg,

  Engine,
  DieselEngine,
  GasolineEngine,
  Paint,
  BlackPaint,
  WhitePaint,
  Wheels,
  BigWheels,
  MediumWheels,
};
