import { Module } from '@nestjs/common';
import { AppController } from './App.controller';
import { AppService } from './App.service';

import { TGBotService } from '../tgbot/TGBot.service';

import { FTPModule } from '../ftpAdapter/FTP.module';
import { PatternModule } from '../pattern/Pattern.module';

@Module({
  imports: [
    FTPModule,
    PatternModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    TGBotService,
  ],
})
export class AppModule {}
