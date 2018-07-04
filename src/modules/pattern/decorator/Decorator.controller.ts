import { Controller, Get } from '@nestjs/common';
import { DecoratorService } from './Decorator.service';

@Controller('pattern/decorator')
export class DecoratorController {

  constructor(
    private readonly decoratorService: DecoratorService,
  ) {}

  @Get()
  root(): any {
    return {
      message: this.decoratorService.runDecorating(),
    };
  }

}
