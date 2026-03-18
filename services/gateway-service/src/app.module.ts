import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { MicroservicesModule } from './modules/microservices/microservices.module';
import { config } from 'config/services.config';

@Module({
  imports: [
    MicroservicesModule.register(config),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 