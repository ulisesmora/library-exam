import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Author } from './Author.entity';
import { Genre } from './Genre.entity';
import { Publisher } from './Publisher.entity';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  isn: string;
  @Column()
  publishedYear: number;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  modified: Date;
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted: Date;
  @ManyToMany((type) => Genre, (genre) => genre.book, {
    eager: false,
    cascade: true,
  })
  @JoinTable()
  genre: Genre[];
  @ManyToMany((type) => Author, (author) => author.book, {
    eager: false,
    cascade: true,
  })
  @JoinTable()
  author: Author[];
  @ManyToOne((type) => Publisher, (publisher) => publisher.book, {
    eager: false,
  })
  publisher: Publisher[];
}
