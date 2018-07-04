import { Controller, Get } from '@nestjs/common';
import { ObserverService } from './Observer.service';

@Controller('pattern/observer')
export class ObserverController {

  constructor(
    private readonly observerService: ObserverService,
  ) {}

  @Get()
  root(): any {
    return {
      message: this.observerService.runObserving(),
    };
  }

}
