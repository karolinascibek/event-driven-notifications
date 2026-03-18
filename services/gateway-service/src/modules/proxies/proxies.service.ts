import { ProxyConfig } from 'modules/proxies/interfaces/proxies.interface';


export class ProxiesService {
  config: ProxyConfig;

  constructor(config: ProxyConfig) {
    this.config = config;
  }

  sendRequest(data: any): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }
}
