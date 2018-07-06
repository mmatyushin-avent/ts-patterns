import { Module } from '@nestjs/common';
import { AppController } from './App.controller';
import { AppService } from './App.service';

import { FTPModule } from 'modules/ftpAdapter/FTP.module';
import { PatternModule } from 'modules/pattern/Pattern.module';

@Module({
  imports: [
    FTPModule,
    PatternModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
