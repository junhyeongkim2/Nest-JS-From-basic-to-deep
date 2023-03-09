import {
  Body,
  Controller,
  Get,
  Param,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { CatsService } from './cats/cats.service';
import { SuccessInterceptor } from './common/interceptors/success.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello() {
    return this.appService.getHello();
  }
}
