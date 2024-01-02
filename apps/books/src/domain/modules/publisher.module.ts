import { Module } from '@nestjs/common';
import { Publisher } from '../models/Publisher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublisherService } from '../../application/service/publisher.service';
import { PublisherController } from '../../infrastructure/controllers/publisher.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Publisher])],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class PublisherModule {}
