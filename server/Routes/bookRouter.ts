import express from 'express';
import {
  getAllBooksHandler,
  createBookHandler,
  bulkUpdateBooksHandler,
  deleteManyBooksHandler,
  getBookHandler,
  updateBookHandler,
  deleteBookHandler,
} from '@Controllers/bookController';

const router = express.Router();

router
  .route('/')
  .get(getAllBooksHandler)
  .post(createBookHandler)
  .patch(bulkUpdateBooksHandler)
  .delete(deleteManyBooksHandler);

router.route('/:id').get(getBookHandler).patch(updateBookHandler).delete(deleteBookHandler);

export default router;
