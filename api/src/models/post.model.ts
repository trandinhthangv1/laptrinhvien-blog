import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';
import IPost from './interfaces/post.interface';

mongoose.plugin(slug);

const PostScheme = new mongoose.Schema<IPost>(
  {
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'user', required: true },
    topicId: { type: mongoose.SchemaTypes.ObjectId, ref: 'topic', required: true },
    content: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    slug: { type: String, slug: 'name' },
  },
  { timestamps: true }
);

export default mongoose.model<IPost>('post', PostScheme);
