import { Injectable } from '@nestjs/common';
// import * as jsftp from 'jsftp';
import * as fs from 'fs';
import * as path from 'path';
import { Readable, Writable } from 'stream';
import { Client, FileInfo, Response } from 'basic-ftp';

// tslint:disable:no-console

const ftpSettings = {
  host: 'demo.wftpserver.com', // default: localhost
  // host: 'ftp://ftp.dlptest.com', // default: localhost
  port: 2222, // default: 21
  // port: 3331, // default: 21
  user: 'dlpuser@dlptest.com', // default: anonymous
  password: '3D6XZV9MKdhM5fF', // default: guest
  secure: true, // default: false
  // secureOptions
};

// const Ftp = new jsftp({
//   host: 'ftp://ftp.dlptest.com',
//   port: 21, // defaults to 21
//   user: 'dlpuser@dlptest.com', // defaults to "anonymous"
//   pass: '3D6XZV9MKdhM5fF', // defaults to "@anonymous"
// });

@Injectable()
export class FTPService {

  protected client: Client;

  constructor() {
    const client = new Client();
    client.access(ftpSettings)
      .then(() => {
        console.log(`ftp connection is ok`);
        this.client = client;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public async getFile() {
    const localFilePath = path.join(__dirname, 'ftptest.txt');
    const file = fs.createReadStream(localFilePath);
    await this.upload(file, 'ftptest.txt');
    return this.list();
  }

  public async saveFile() {
    //
  }

  public async deleteFile() {
    //
  }

  protected async list(): Promise<FileInfo[]> {
    return this.client.list();
  }

  protected async upload(readableStream: Readable, remoteFilename: string): Promise<Response> {
    return this.client.upload(readableStream, remoteFilename);
  }

  protected async download(writableStream: Writable, remoteFilename: string, startAt: number = 0): Promise<Response> {
    return this.client.download(writableStream, remoteFilename, startAt);
  }

  protected async rename(path: string, newPath: string): Promise<Response> {
    return this.client.rename(path, newPath);
  }

  protected async remove(filename, ignoreErrorCodes = false): Promise<Response> {
    return this.client.remove(filename, ignoreErrorCodes);
  }

  protected close(): void {
    return this.client.close();
  }

  // protected async get(remotePath: string, localPath: string): Promise<any> {
  //   Ftp.get(remotePath, "local/file.txt", err => {
  //     if (hadErr) {
  //       return console.error("There was an error retrieving the file.");
  //     }
  //     console.log("File copied successfully!");
  //   });
  // }

  // protected async put(file: Buffer, remotePath: string): Promise<any> {
  //   Ftp.put(file, remotePath, (err) => {
  //     if (!err) {
  //       console.log('File transferred successfully!');
  //     }
  //   });
  // }

}
