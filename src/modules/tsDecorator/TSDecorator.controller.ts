import { Get, Controller, Body } from '@nestjs/common';
import { TSDecoratorService } from './TSDecorator.service';
// tslint:disable:no-console

@Controller('ts-decorator')
export class TSDecoratorController {

  constructor(
    private readonly tsDecoratorService: TSDecoratorService,
  ) {}

  @Get()
  public async decorate(
    @Body('str') str: string,
  ) {
    return this.tsDecoratorService.decorateMePlease(str);
  }

}
