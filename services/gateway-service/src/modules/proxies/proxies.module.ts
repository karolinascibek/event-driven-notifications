import { DynamicModule, Global, Module } from '@nestjs/common';
import { ProxiesService } from './proxies.service';
import { ProxyConfig } from 'modules/proxies/interfaces/proxies.interface';

@Global()
@Module({})
export class ProxiesModule {
  static register(configs: Record<string, ProxyConfig>): DynamicModule {
    const providers = Object.entries(configs).map(([name, config]) => ({
      provide: `PROXY_${name.toUpperCase()}`,
      useFactory: () => new ProxiesService(config),
    }));

    return {
      module: ProxiesModule,
      providers: providers, // Definicja wewnątrz modułu
      exports: providers,
    };
  }
}
