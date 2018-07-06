import { Module } from '@nestjs/common';
import { FTPController } from './FTP.controller';
import { FTPService } from './FTP.service';

@Module({
  imports: [],
  controllers: [FTPController],
  providers: [FTPService],
})
export class FTPModule {}
