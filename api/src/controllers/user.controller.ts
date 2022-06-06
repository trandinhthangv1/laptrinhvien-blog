import { Request, Response } from 'express';
import userService from '@services/user.service';
import SuccessRes from '@utils/success-handle';
import ErrorRes from '@utils/error-handle';
import USER_MESSAGE from '@constants/messages/user';

const getAll = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    return new SuccessRes(res, USER_MESSAGE.get_all_user_success, users, 200);
  } catch (error: any) {
    return new ErrorRes(res, error.message || error, error.statusCode);
  }
};

export default { getAll };
