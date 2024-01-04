export const genres = [
  'Science Fiction',
  'Satire',
  'Drama',
  'Action',
  'Romance',
  'Mystery',
  'Horror',
] as const;

export type Genre = (typeof genres)[number];

export interface IBook {
  title: string;
  description: string;
  id: number;
  author: string;
  publicationDate: Date;
  genre: Genre;
  price: number;
}

export interface IBookDocument extends IBook, Document {}
