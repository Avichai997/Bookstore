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
  id?: string;
  _id?: string;
  author: string;
  publicationDate: string;
  genre: Genre;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}
