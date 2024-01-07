/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  bulkUpdate,
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from '@Controllers/handlerFactory';
import Book from '@Models/bookModel';
import { Request } from 'express';

export const getAllBooksService = (req: Request) => {
  const book = getAll(Book, req);

  return book;
};
export const getBookService = (payload: any) => {
  const book = getOne(Book, payload);

  return book;
};
export const createBookService = (payload: any) => {
  const book = createOne(Book, payload);

  return book;
};
export const updateBookService = (payload: any) => {
  const book = updateOne(Book, payload);

  return book;
};
export const deleteBookService = (payload: any) => {
  const book = deleteOne(Book, payload);

  return book;
};
export const bulkUpdateBookService = (payload: any) => {
  const book = bulkUpdate(Book, payload);

  return book;
};
