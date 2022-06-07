import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';
import ITopic from './interfaces/topic.interface';

mongoose.plugin(slug);

const TopicSchema = new mongoose.Schema<ITopic>(
  {
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'user', required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    slug: { type: String, slug: 'name' },
  },
  { timestamps: true }
);

export default mongoose.model<ITopic>('topic', TopicSchema);
