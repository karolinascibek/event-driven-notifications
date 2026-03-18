import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MicroservicesModule } from 'modules/microservices/microservices.module';

@Module({
  imports: [],
  controllers: [UsersController],
})
export class UsersModule {}
