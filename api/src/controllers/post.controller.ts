import POST_MESSAGE from '@constants/messages/post';
import postService from '@services/post.service';
import ErrorResponse from '@utils/error-handle';
import SuccessResponse from '@utils/success-handle';
import { Request, Response } from 'express';

const getOneById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const topics = await postService.getOneById(id);
    return new SuccessResponse(res, POST_MESSAGE.get_one_success, topics, 200);
  } catch (error: any) {
    return new ErrorResponse(res, error.message || error, error.statusCode);
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const { topic, page, limit } = req.params;
    const topics = await postService.getAll(topic, Number(page), Number(limit));
    return new SuccessResponse(res, POST_MESSAGE.get_all_success, topics, 200);
  } catch (error: any) {
    return new ErrorResponse(res, error.message || error, error.statusCode);
  }
};

const createOne = async (req: Request, res: Response) => {
  try {
    const { topicId, content, title, image } = req.body;
    const isValidBody = topicId && content && title && image;

    if (!isValidBody) {
      throw { statusCode: 400, message: POST_MESSAGE.miss_data_body };
    }

    const topic = await postService.createOne({ userId: req.user._id, ...req.body });

    return new SuccessResponse(res, POST_MESSAGE.create_success, topic, 200);
  } catch (error: any) {
    return new ErrorResponse(res, error.message || error, error.statusCode);
  }
};

export default { createOne, getAll, getOneById };
