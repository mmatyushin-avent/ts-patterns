import { Injectable } from '@nestjs/common';
import { Safe, SafeAdvanced } from './decorators';

// tslint:disable:no-console

@Injectable()
export class TSDecoratorService {

  constructor() {}

  @SafeAdvanced()
  public async decorateMePlease(str: string): Promise<string> {
    if (!str) {
      throw new Error(`Something bad is occured`);
    }

    return str;
  }

}
