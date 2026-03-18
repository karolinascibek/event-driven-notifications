import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProxiesModule } from './modules/proxies/proxies.module';
import { config } from 'configs/proxies.config';

@Module({
  imports: [
    ProxiesModule.register(config),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 