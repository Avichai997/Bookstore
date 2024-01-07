/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request } from 'express';
import { Model, Query, UnpackedIntersection } from 'mongoose';
import { IPopulateOptions } from '@Interfaces/common';
import catchAsync from '@Utils/catchAsync';
import AppError from '@Utils/AppError';
import APIFeatures from '@Utils/ApiFeatures';
import removeImage from '@Utils/removeImage';

export const createOne = async <T>(Model: Model<T>, payload: any) => {
  const doc = await Model.create(payload);

  return doc;
};

export const getAll = async <T>(
  Model: Model<T>,
  req: Request,
  populateOptions?: IPopulateOptions
) => {
  // To allow for nested GET links of department (hack)

  const features = new APIFeatures(Model.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  if (populateOptions) features.query = features.query.populate(populateOptions);

  const doc = await features.query;

  return doc;
};

export const getOne = async <T>(
  Model: Model<T>,
  req: Request,
  populateOptions?: IPopulateOptions
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let query: Query<any, T> = Model.findById(req.params.id);
  if (populateOptions)
    (query as Query<unknown, T, object, UnpackedIntersection<T, unknown>, 'find'>) =
      query.populate(populateOptions);

  const doc = await query;
  if (!doc) throw new AppError('רשומה לא נמצאה', 404);

  return doc;
};

export const updateOne = async <T>(Model: Model<T>, req: Request) => {
  delete req.body._id;
  delete req.body.id;

  const document = await Model.findById(req.params.id);
  if (!document) throw new AppError('רשומה לא נמצאה', 404);

  const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  return doc;
};

export const bulkUpdate = <T>(Model: Model<T>) =>
  catchAsync(async (req, res) => {
    const queries = [];

    for (let i = 0; i < req.body.length; i++) {
      const row = { ...req.body[i] };
      delete row.id;

      queries.push(
        Model.findByIdAndUpdate(req.body[i].id, row, {
          new: true,
          runValidators: true,
        })
      );
    }
    const docs = await Promise.all(queries);

    return res.status(200).json(docs);
  });

export const deleteOne = <T>(Model: Model<T>) =>
  catchAsync(async (req, res, next: NextFunction) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError('רשומה לא נמצאה', 404));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const oldImage = (doc as any)[req.body.imageFieldName];
    const nameFolder = req.baseUrl.slice(req.baseUrl.lastIndexOf('/') + 1);

    removeImage(oldImage, nameFolder);

    return res.status(204).json({
      status: 'success',
      data: null,
    });
  });

export const deleteMany = <T>(Model: Model<T>) =>
  catchAsync(async (req, res, next: NextFunction) => {
    const docs = await Model.deleteMany();
    if (!docs) {
      return next(new AppError('רשומה לא נמצאה', 404));
    }

    return res.status(204).json({
      status: 'success',
      data: null,
    });
  });
