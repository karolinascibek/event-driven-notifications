import { DynamicModule, Global, Module } from '@nestjs/common';
import { MicroservicesService } from './microservices.service';
import { MicroServiceConfig } from '@core/interfaces/microservice.interface';

@Global()
@Module({})
export class MicroservicesModule {
  static register(configs: Record<string, MicroServiceConfig>): DynamicModule {
    const providers = Object.entries(configs).map(([name, config]) => ({
      provide: `MICROSERVICE_${name.toUpperCase()}`,
      useFactory: () => new MicroservicesService(config),
    }));

    return {
      module: MicroservicesModule,
      providers: providers, // Definicja wewnątrz modułu
      exports: providers,
    };
  }
}
