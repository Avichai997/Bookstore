/// <reference path="./Interfaces/global/xss-clean.d.ts" />
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import globalErrorHandler from '@Controllers/errorController';
import AppError from '@Utils/AppError';
import userRouter from '@Routes/userRouter';
import bookRouter from '@Routes/bookRouter';
import {
  helmetMiddleware,
  corsMiddleware,
  xssMiddleware,
  limiterMiddleware,
  csrfProtectionMiddleware,
  mongoSanitizeMiddleware,
  hppMiddleware,
} from '@Middlewares/security';
import morgan from 'morgan';
import { version } from './package.json';

const app = express();

app.options('*', cors());
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use(compression());

// Security middlewares
app.use(helmetMiddleware);
app.use(corsMiddleware);
app.use(morgan('dev'));
app.use(xssMiddleware);
app.use('/api', limiterMiddleware);
app.use(csrfProtectionMiddleware);
app.use(mongoSanitizeMiddleware);
app.use(hppMiddleware);

// 2) ROUTES
app.use('/api/users', userRouter);
app.use('/api/books', bookRouter);

app.get('/api/health', (req, res) => res.send(`Server is up and running v${version}!`));

app.all('*', (req, _res, next) =>
  next(new AppError(`הכתובת ${req.originalUrl} לא קיימת בשרת!`, 404))
);

// Handle app errors.
app.use(globalErrorHandler);

export default app;
