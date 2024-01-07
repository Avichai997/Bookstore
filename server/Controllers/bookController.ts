import Book from '@Models/bookModel';
import catchAsync from '@Utils/catchAsync';
import { createBookService, getAllBooksService } from '@Services/bookService';
import AppError from '@Utils/AppError';
import { getAll, getOne, updateOne, deleteOne, bulkUpdate, deleteMany } from './handlerFactory';

export const getAllBooksHandler = getAll(Book);
export const getAllBookHandler = catchAsync(async (req, res) => {
  const book = getAllBooksService(req);
  res.status(201).json(book);
});
export const getBookHandler = catchAsync(async (req, res, next) => {
  const book = getAllBooksService(req);

  res.status(201).json(book);
});
export const createBookHandler = catchAsync(async (req, res) => {
  const book = createBookService(req.body);
  res.status(201).json(book);
});
export const updateBookHandler = updateOne(Book);
export const bulkUpdateBooksHandler = bulkUpdate(Book);
export const deleteBookHandler = deleteOne(Book);
export const deleteManyBooksHandler = deleteMany(Book);
