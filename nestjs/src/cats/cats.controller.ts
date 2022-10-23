import { CatsService } from './cats.service';
import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  //cats
  @Get()
  getAllCat() {
    return 'all cat';
  }

  //cat
  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
