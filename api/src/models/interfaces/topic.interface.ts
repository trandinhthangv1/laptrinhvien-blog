import { Document, ObjectId } from 'mongoose';

interface Topic extends Document {
  userId: ObjectId;
  name: string;
  title: string;
  image: string;
  slug: string;
}

export default Topic;
