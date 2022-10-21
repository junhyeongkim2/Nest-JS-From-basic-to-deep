import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id')
  getHello(@Req() req: Request, @Body() Body, @Param() param: string) {
    console.log(req);
    console.log(Body);
    console.log(param);

    return this.appService.getHello();
  }
}
