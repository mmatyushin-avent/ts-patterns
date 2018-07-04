import { Module } from '@nestjs/common';
import { ObserverController } from './Observer.controller';
import { ObserverService } from './Observer.service';

@Module({
  imports: [],
  controllers: [ObserverController],
  providers: [ObserverService],
})
export class ObserverModule {}
