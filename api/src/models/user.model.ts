import mongoose from 'mongoose';
import IUser from './interfaces/user.interface';

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    role: { type: String, required: true, default: 'member' },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('user', UserSchema);
