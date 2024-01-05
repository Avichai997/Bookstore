import { Schema, model } from 'mongoose';
import { IBook, genres } from '@Interfaces/IBook';

const bookSchema = new Schema<IBook>(
  {
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
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Book = model<IBook>('Book', bookSchema);

export default Book;
