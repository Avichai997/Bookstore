/* eslint-disable no-console */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from '@/app';
import { NODE_ENV, PORT, DATABASE, HOST } from '@Utils/environment';
// Catch uncaughtException errors in server.
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config();

if (!NODE_ENV || !PORT || !DATABASE || !HOST) process.exit(1);

// don't allow mongoose save fields that don't exist in model's schema
mongoose.set('strictQuery', true).connect(DATABASE);
mongoose.connection.on('connected', () => {
  console.log('DB connection successful!', '\x1b[0m');
});

const server = app.listen(PORT, () => {
  console.log('\x1b[32m', `App running on ${HOST}:${PORT}...`);
  console.log(`NODE_ENV: ${NODE_ENV}`);
});

// catch async errors
process.on('unhandledRejection', (err: Error) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err, err.name, err.message);
  // easy close the server
  server.close(() => {
    process.exit(1);
  });
});
