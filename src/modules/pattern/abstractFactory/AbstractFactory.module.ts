import { Module } from '@nestjs/common';
import { AbstractFactoryController } from './AbstractFactory.controller';
import { AbstractFactoryService } from './AbstractFactory.service';

@Module({
  imports: [],
  controllers: [AbstractFactoryController],
  providers: [AbstractFactoryService],
})
export class AbstractFactoryModule {}
