import { Module } from '@nestjs/common';
import { TSDecoratorController } from './TSDecorator.controller';
import { TSDecoratorService } from './TSDecorator.service';

@Module({
  imports: [],
  controllers: [TSDecoratorController],
  providers: [TSDecoratorService],
})
export class TSDecoratorModule {}
