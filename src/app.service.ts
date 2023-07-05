import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSomthing(): string {
    return 'something went wrong what are you do';
  }
}
