import { Module } from '@nestjs/common';
import { DecoratorController } from './Decorator.controller';
import { DecoratorService } from './Decorator.service';

@Module({
  imports: [],
  controllers: [DecoratorController],
  providers: [DecoratorService],
})
export class DecoratorModule {}
