declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      CLIENT_PORT?: string;
      SERVER_PORT: string;
      HOST: string;
    }
  }
}

export {};
