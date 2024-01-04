import { Schema, model } from 'mongoose';
import { IBookDocument, genres } from '@Interfaces/IBook';

const bookSchema = new Schema<IBookDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  publicationDate: { type: Date, required: true },
  genre: {
    type: String,
    enum: genres,
    required: true,
  },
  price: { type: Number, required: true },
});

const BookModel = model<IBookDocument>('Book', bookSchema);

export default BookModel;
