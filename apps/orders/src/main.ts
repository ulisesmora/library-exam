import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('ORDERS'));
  await app.startAllMicroservices();
}
bootstrap();
