import Topic from '@models/topic.model';
import { CreateTopic } from './interfaces/topic.interface';

const getAll = async () => {
  const topics = await Topic.find().sort({ createdAt: 'desc' });
  return topics;
};

const createOne = async (data: CreateTopic) => {
  const topic = await Topic.create(data);
  return topic;
};

export default { createOne, getAll };
