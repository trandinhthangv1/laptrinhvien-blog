import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import MIDDLEWARE_MESSAGE from '@constants/messages/middleware';
import User from '@models/user.model';
import ErrorRes from '@utils/error-handle';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      throw { statusCode: 401, message: MIDDLEWARE_MESSAGE.not_found_token };
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as { userId: string };

    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      throw { statusCode: 401, message: MIDDLEWARE_MESSAGE.not_found_user };
    }

    req.user = user;

    next();
  } catch (error: any) {
    return new ErrorRes(res, error.message || error, error.statusCode);
  }
};

const checkRoles = (roles: string[]) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!roles.includes(req.user.role)) {
      throw { statusCode: 400, message: MIDDLEWARE_MESSAGE.permission_denied };
    }

    next();
  } catch (error: any) {
    return new ErrorRes(res, error.message || error, error.statusCode);
  }
};

export default { verifyToken, checkRoles };
