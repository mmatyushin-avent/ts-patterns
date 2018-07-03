import { Get, Controller } from '@nestjs/common';
import { PatternService } from './Pattern.service';

@Controller()
export class PatternController {

  constructor(private readonly patternService: PatternService) {}

  @Get('pattern')
  root(): any {
    return {
      message: this.patternService.root(),
    };
  }

}
