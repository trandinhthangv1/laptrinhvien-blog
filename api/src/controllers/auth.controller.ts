import { Request, Response } from 'express';
import AUTH_MESSAGE from '@constants/messages/auth';
import authService from '@services/auth.service';
import SuccessRes from '@utils/success-handle';
import ErrorRes from '@utils/error-handle';

const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await authService.registerUser(req.body);

    return new SuccessRes(res, AUTH_MESSAGE.create_success, user, 200);
  } catch (error: any) {
    return new ErrorRes(res, error.message || error, error.statusCode);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const user = await authService.login(req.body.username, req.body.password);

    return new SuccessRes(res, AUTH_MESSAGE.login_success, user, 200);
  } catch (error: any) {
    return new ErrorRes(res, error.message || error, error.statusCode);
  }
};

export default { registerUser, login };
