import { Controller, Get, Post, Query } from '@nestjs/common';
import { AbstractFactoryService } from './AbstractFactory.service';

@Controller('pattern/abstract-factory')
export class AbstractFactoryController {

  constructor(
    private readonly factoryService: AbstractFactoryService,
  ) {}

  @Get()
  root(): any {
    return {
      message: this.factoryService.root(),
    };
  }

  @Post()
  create(
    @Query('type') type: string,
  ): any {
    return {
      message: this.factoryService.createCar(type),
    };
  }

}
