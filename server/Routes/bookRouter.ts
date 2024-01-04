import { protect, restrictTo } from '@Controllers/authController';
import express from 'express';
import {
  getAllBooks,
  createBook,
  bulkUpdateBooks,
  deleteManyBooks,
  getBook,
  updateBook,
  deleteBook,
} from '@Controllers/bookController';

const router = express.Router();

router
  .route('/')
  .get(getAllBooks)
  .post(protect, restrictTo('admin'), createBook)
  .patch(protect, restrictTo('admin'), bulkUpdateBooks)
  .delete(protect, restrictTo('admin'), deleteManyBooks);

router
  .route('/:id')
  .get(getBook)
  .patch(protect, restrictTo('admin'), updateBook)
  .delete(protect, restrictTo('admin'), deleteBook);

export default router;
