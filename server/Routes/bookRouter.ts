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

router.route('/').get(getAllBooks).post(createBook).patch(bulkUpdateBooks).delete(deleteManyBooks);

router.route('/:id').get(getBook).patch(updateBook).delete(deleteBook);

export default router;
