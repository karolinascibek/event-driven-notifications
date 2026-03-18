import { ProxyConfig } from "modules/proxies/interfaces/proxies.interface";

export const config: Record<string, ProxyConfig> = {
    USERS: {
        host: 'user-service',
        port: 3002,
        proto: 'http',
        timeout: 5000,
        path: 'api',
        auth: {
            apiKey: 'my-secret-key-user-service'
        }
    }
}

