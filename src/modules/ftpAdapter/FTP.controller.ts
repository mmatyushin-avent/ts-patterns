import { Get, Controller, Post, Delete } from '@nestjs/common';
import { FTPService } from './FTP.service';
// tslint:disable:no-console

@Controller('ftp')
export class FTPController {
  constructor(private readonly ftpService: FTPService) {}

  @Get()
  public async root() {
    const result = await this.ftpService.getFile();
    console.log(result);
  }

  @Post()
  public async save() {
    const result = await this.ftpService.getFile();
    console.log(result);
    return this.ftpService.saveFile();
  }

  @Delete()
  public async delete() {
    const result = await this.ftpService.getFile();
    console.log(result);
    return this.ftpService.deleteFile();
  }

}
