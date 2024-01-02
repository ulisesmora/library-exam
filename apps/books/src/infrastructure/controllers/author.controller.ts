import { Controller, Get } from '@nestjs/common';
import { AuthorService } from '../../application/service/author.service';

@Controller()
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  getHello(): string {
    return this.authorService.getHello();
  }
}
