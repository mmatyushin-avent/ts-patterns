import { Controller, Get } from '@nestjs/common';
import { StrategyService } from './Strategy.service';

@Controller('pattern/strategy')
export class StrategyController {

  constructor(
    private readonly strategyService: StrategyService,
  ) {}

  @Get()
  root(): any {
    return {
      message: this.strategyService.showDucks(),
    };
  }

}
