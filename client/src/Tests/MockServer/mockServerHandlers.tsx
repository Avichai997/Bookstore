import { rest } from 'msw';
import { IBook } from '@ApiService/Interfaces/IBooks';
import { BOOKS_QUERY_KEY } from '@CommonConstants';
import { mockBook } from './mockData';

export const mockServerHandlers = [
  // Book Handlers
  rest.get(`*/${BOOKS_QUERY_KEY}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json<IBook[]>([mockBook]))
  ),
  rest.get(`*/${BOOKS_QUERY_KEY}/:id`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json<IBook>(mockBook))
  ),
  rest.post(`*/${BOOKS_QUERY_KEY}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json<IBook>(mockBook))
  ),
  rest.patch(`*/${BOOKS_QUERY_KEY}/:id`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json<IBook>(mockBook))
  ),
  rest.delete(`*/${BOOKS_QUERY_KEY}/:id`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json<IBook['id']>('Success deleting Goal'))
  ),
];
