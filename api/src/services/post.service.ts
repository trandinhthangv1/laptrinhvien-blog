import Post from '@models/post.model';
import { CreateTopic } from './interfaces/topic.interface';

const getOneById = async (id: string) => {
  const post = await Post.findById(id);

  return post;
};

const getAll = async (topic: string, page: number, limit: number) => {
  const postCount = await Post.find({ topicId: topic }).count();
  const posts = await Post.find({ topicId: topic })
    .limit(limit)
    .skip(limit * page);
  return { count: postCount, posts };
};

const createOne = async (data: CreateTopic) => {
  const post = await Post.create(data);
  return post;
};

export default { createOne, getAll, getOneById };
