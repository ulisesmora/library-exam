import { Controller, Get } from '@nestjs/common';
import { PublisherService } from '../../application/service/publisher.service';

@Controller()
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Get()
  getHello(): string {
    return this.publisherService.getHello();
  }
}
