import { CatsRepository } from './cats.repository';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './cats.schema';
import { AuthModule } from 'src/auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { CatsController } from './controllers/cats.controller';
import { CatsService } from './services/cats.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    forwardRef(() => AuthModule),
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository],
  exports: [CatsService, CatsRepository],
})
export class CatsModule {}
