import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from '../models/Author.entity';
import { AuthorService } from '../../application/service/author.service';
import { AuthorController } from '../../infrastructure/controllers/author.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
