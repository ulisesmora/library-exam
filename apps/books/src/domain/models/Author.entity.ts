import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Book } from './Book.entity';

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  name: string;
  @Column()
  lastName: string;
  @Column()
  country: string;
  @Column()
  birthDate: string;
  @Column()
  dieDate: string;
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
  @ManyToMany((type) => Book, (book) => book.author, {
    eager: false,
  })
  book: Book[];
}
