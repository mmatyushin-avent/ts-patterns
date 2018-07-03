import { Controller, Get, Post } from '@nestjs/common';
import { SimpleFactoryService } from './SimpleFactory.service';

@Controller('pattern/simple-factory')
export class SimpleFactoryController {

  constructor(
    private readonly factoryService: SimpleFactoryService,
  ) {}

  @Get()
  root(): any {
    return {
      message: this.factoryService.root(),
    };
  }

  @Post()
  create(): any {
    return {
      message: this.factoryService.createCar(),
    };
  }

}
