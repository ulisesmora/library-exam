import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Book } from '../domain/models/Book.entity';
import { Author } from '../domain/models/Author.entity';
import { Genre } from '../domain/models/Genre.entity';
import { Publisher } from '../domain/models/Publisher.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'gpt',
  entities: [Book, Author, Genre, Publisher],
  synchronize: true,
};
