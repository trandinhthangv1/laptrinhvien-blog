import Post from '@models/post.model';
import { CreateTopic } from './interfaces/topic.interface';

const getOneById = async (id: string) => {
  const post = await Post.findById(id);

  return post;
};

const getAll = async (topic: string, page: number = 1, limit: number = 10) => {
  const postCount = await Post.find({ topicId: topic }).count();
  const posts = await Post.find({ topicId: topic })
    .limit(limit)
    .skip(limit * (page - 1))
    .sort({ createdAt: 'desc' });

  return { count: postCount, posts };
};

const createOne = async (data: CreateTopic) => {
  const post = await Post.create(data);
  return post;
};

export default { createOne, getAll, getOneById };
