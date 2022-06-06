import { Response } from 'express';

export default class ErrorResponse<E> {
  constructor(res: Response, message: E, statusCode: number = 500) {
    res.status(statusCode).json({ message });
  }
}
