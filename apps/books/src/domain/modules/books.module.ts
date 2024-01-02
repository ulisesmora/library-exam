import { Module } from '@nestjs/common';
import { BooksController } from '../../infrastructure/controllers/books.controller';
import { BooksService } from '../../application/service/books.service';
import { Book } from '../models/Book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
