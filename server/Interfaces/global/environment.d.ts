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
      CLIENT_URL: string;
      PORT: string;
      HOST: string;
      DATABASE: string;
    }
  }
}

export {};
