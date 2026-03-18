type AuthKey = {
    apiKey: string
}

export class MicroServiceConfig {
    port: number;
    host: string;
    path: string;
    proto: 'http' | 'https';
    auth: AuthKey;
    timeout: number;
}