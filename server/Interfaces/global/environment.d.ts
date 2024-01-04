/* eslint-disable @typescript-eslint/naming-convention */

declare global {
  namespace Express {
    interface Request {
      user: Partial<IUsers>;
      // file?: File | undefined;
      file?: Multer.File | undefined;
      requestTime: string;
      rateLimit: { remaining: string };
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT: number;
      PORT_PROD: number;
      DATABASE: string;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
      DATABASE_NAME: string;
      CLIENT_URL: string;
      // JWT / Cookie
      JWT_SECRET: string;
      JWT_EXPIRES_IN: string;
      JWT_COOKIE_EXPIRES_IN: string;
    }
  }
}

export {};
