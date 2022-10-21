import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //비즈니스 로직이 실행
    console.log('hello');

    return 'Hello World!';
  }
}
