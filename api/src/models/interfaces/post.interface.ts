import { Document, ObjectId } from 'mongoose';

interface Post extends Document {
  userId: ObjectId;
  topicId: ObjectId;
  content: string;
  title: string;
  image: string;
  slug: string;
}

export default Post;
