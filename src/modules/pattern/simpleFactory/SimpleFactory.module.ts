import { Module } from '@nestjs/common';
import { SimpleFactoryController } from './SimpleFactory.controller';
import { SimpleFactoryService } from './SimpleFactory.service';

@Module({
  imports: [],
  controllers: [SimpleFactoryController],
  providers: [SimpleFactoryService],
})
export class SimpleFactoryModule {}
