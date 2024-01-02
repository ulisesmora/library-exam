import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { GenreModule } from './domain/modules/genre.module';
import { AuthorModule } from './domain/modules/author.module';
import { PublisherModule } from './domain/modules/publisher.module';
import { BooksModule } from './domain/modules/books.module';
import { RmqModule } from '@app/common';
import { BILLING_SERVICE } from './domain/services';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
   /* RmqModule.register({
      name: BILLING_SERVICE,
    }),*/
    BooksModule,
    AuthorModule,
    GenreModule,
    PublisherModule,
  ],
})
export class AppModule {}
