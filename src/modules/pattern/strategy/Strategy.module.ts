import { Module } from '@nestjs/common';
import { StrategyController } from './Strategy.controller';
import { StrategyService } from './Strategy.service';

@Module({
  imports: [],
  controllers: [StrategyController],
  providers: [StrategyService],
})
export class StrategyModule {}
