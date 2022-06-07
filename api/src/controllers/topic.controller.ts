import TOPIC_MESSAGE from '@constants/messages/topic';
import topicService from '@services/topic.service';
import ErrorResponse from '@utils/error-handle';
import SuccessResponse from '@utils/success-handle';
import { Request, Response } from 'express';

const getAll = async (_: Request, res: Response) => {
  try {
    const topics = await topicService.getAll();
    return new SuccessResponse(res, TOPIC_MESSAGE.get_all_success, topics, 200);
  } catch (error: any) {
    return new ErrorResponse(res, error.message || error, error.statusCode);
  }
};

const createOne = async (req: Request, res: Response) => {
  try {
    const { name, title, image } = req.body;
    const isValidBody = name && title && image;

    if (!isValidBody) {
      throw { statusCode: 400, message: TOPIC_MESSAGE.miss_data_body };
    }

    const topic = await topicService.createOne({ userId: req.user._id, ...req.body });

    return new SuccessResponse(res, TOPIC_MESSAGE.create_success, topic, 200);
  } catch (error: any) {
    return new ErrorResponse(res, error.message || error, error.statusCode);
  }
};

export default { createOne, getAll };
