import { Injectable } from '@nestjs/common';

@Injectable()
export class PatternService {

  root(): string {
    return 'Choose pattern by requesting URN: /pattern/{pattern}';
  }

}
