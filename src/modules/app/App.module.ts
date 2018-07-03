import { Module } from '@nestjs/common';
import { AppController } from './App.controller';
import { AppService } from './App.service';

import { PatternModule } from '../pattern/Pattern.module';

@Module({
  imports: [
    PatternModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
