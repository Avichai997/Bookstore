/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  bulkUpdate,
  createOne,
  deleteMany,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from '@Controllers/handlerFactory';
import Book from '@Models/bookModel';
import { Request } from 'express';

export const getAllBooksService = (req: Request) => {
  const books = getAll(Book, req);

  return books;
};
export const getBookService = (req: Request) => {
  const book = getOne(Book, req);

  return book;
};
export const createBookService = (req: Request) => {
  const book = createOne(Book, req);

  return book;
};
export const updateBookService = (req: Request) => {
  const book = updateOne(Book, req);

  return book;
};
export const bulkUpdateBookService = (req: Request) => {
  const book = bulkUpdate(Book, req);

  return book;
};
export const deleteBookService = (req: Request) => {
  const book = deleteOne(Book, req);

  return book;
};
export const deleteManyBookService = () => {
  const book = deleteMany(Book);

  return book;
};
