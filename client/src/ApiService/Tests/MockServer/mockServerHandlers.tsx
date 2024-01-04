import { rest } from 'msw';
import { SOME_QUERY_KEY } from '@CommonConstants';

interface IGoal {
  id: string;
}
const mockData = {
  id: '1',
};

export const mockServerHandlers = [
  // Goal Handlers
  rest.get(`*/${SOME_QUERY_KEY}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json<IGoal[]>([mockData]))
  ),
  rest.get(`*/${SOME_QUERY_KEY}/:id`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json<IGoal>(mockData))
  ),
  rest.post(`*/${SOME_QUERY_KEY}`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json<IGoal>(mockData))
  ),
  rest.put(`*/${SOME_QUERY_KEY}/:id`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json<IGoal>(mockData))
  ),
  rest.delete(`*/${SOME_QUERY_KEY}/:id`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json<IGoal['id']>('Success deleting Goal'))
  ),
];
