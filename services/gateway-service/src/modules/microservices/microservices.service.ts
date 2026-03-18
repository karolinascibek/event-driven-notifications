import { MicroServiceConfig } from '@core/interfaces/microservice.interface';


export class MicroservicesService {
  config: MicroServiceConfig;

  constructor(config: MicroServiceConfig) {
    this.config = config;
  }

  sendRequest(data: any): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }
}
