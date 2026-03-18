import { MicroServiceConfig } from "@core/interfaces/microservice.interface";

export const config: Record<string, MicroServiceConfig> = {
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

