import { Document } from 'mongoose';

interface User extends Document {
  username: string;
  displayName: string;
  password: string;
  avatar: string;
  role: string | 'member';
}

export default User;
