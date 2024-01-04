import Book from '@Models/bookModel';
import {
  getAll,
  getOne,
  updateOne,
  deleteOne,
  createOne,
  bulkUpdate,
  deleteMany,
} from './handlerFactory';

export const getAllBooks = getAll(Book);
export const getBook = getOne(Book);
export const createBook = createOne(Book);
export const updateBook = updateOne(Book);
export const bulkUpdateBooks = bulkUpdate(Book);
export const deleteBook = deleteOne(Book);
export const deleteManyBooks = deleteMany(Book);
