import { Response } from 'express';

export default class SuccessResponse<T> {
  constructor(res: Response, message: string, data: T, statusCode: number) {
    res.status(statusCode).json({ message, data });
  }
}
