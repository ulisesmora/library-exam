import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Publisher } from '../../domain/models/Publisher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PublisherService {
  constructor(
    @InjectRepository(Publisher)
    private readonly publisherRepository: Repository<Publisher>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
