import { Module } from '@nestjs/common';
import { PatternController } from './Pattern.controller';
import { PatternService } from './Pattern.service';

import { StrategyModule } from './strategy/Strategy.module';
import { ObserverModule } from './observer/Observer.module';
import { DecoratorModule } from './decorator/Decorator.module';
import { SimpleFactoryModule } from './simpleFactory/SimpleFactory.module';
import { AbstractFactoryModule } from './abstractFactory/AbstractFactory.module';

@Module({
  imports: [
    StrategyModule,
    ObserverModule,
    DecoratorModule,
    SimpleFactoryModule,
    AbstractFactoryModule,
  ],
  controllers: [PatternController],
  providers: [PatternService],
})
export class PatternModule {}
