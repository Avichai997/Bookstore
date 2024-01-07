import catchAsync from '@Utils/catchAsync';
import {
  bulkUpdateBookService,
  createBookService,
  deleteBookService,
  deleteManyBookService,
  getAllBooksService,
  getBookService,
  updateBookService,
} from '@Services/bookService';

export const getAllBooksHandler = catchAsync(async (req, res) => {
  const books = await getAllBooksService(req);
  res.status(201).json(books);
});
export const getBookHandler = catchAsync(async (req, res) => {
  const book = await getBookService(req);
  res.status(201).json(book);
});
export const createBookHandler = catchAsync(async (req, res) => {
  const book = await createBookService(req);
  res.status(201).json(book);
});
export const updateBookHandler = catchAsync(async (req, res) => {
  const book = await updateBookService(req);
  res.status(201).json(book);
});
export const bulkUpdateBooksHandler = catchAsync(async (req, res) => {
  const books = await bulkUpdateBookService(req);
  res.status(201).json(books);
});
export const deleteBookHandler = catchAsync(async (req, res) => {
  const book = await deleteBookService(req);
  res.status(201).json(book);
});
export const deleteManyBooksHandler = catchAsync(async (req, res) => {
  const books = await deleteManyBookService();
  res.status(201).json(books);
});
