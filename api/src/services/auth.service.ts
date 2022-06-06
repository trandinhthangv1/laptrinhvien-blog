import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import AUTH_MESSAGE from '@constants/messages/auth';
import User from '@models/user.model';
import { RegisterUser } from './interfaces/auth.interface';

const registerUser = async (data: RegisterUser) => {
  const { username, password, avatar, role } = data;
  const userExist = await User.findOne({ username });

  if (userExist) {
    throw { statusCode: 400, message: AUTH_MESSAGE.user_exist };
  }

  const hashPassword = await argon2.hash(password);

  const user = await User.create({
    username,
    avatar,
    role,
    password: hashPassword,
  });

  return {
    _id: user._id,
    username: user.username,
    avatar: user.avatar,
    role: user.role,
  };
};

const login = async (username: string, password: string) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw { statusCode: 400, message: AUTH_MESSAGE.not_found_user };
  }

  const verifyPassword = await argon2.verify(user.password, password);

  if (!verifyPassword) {
    throw { statusCode: 400, message: AUTH_MESSAGE.invalid_info };
  }

  const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: '30d',
  });

  return {
    _id: user._id,
    username: user.username,
    avatar: user.avatar,
    role: user.role,
    token: accessToken,
  };
};

export default { registerUser, login };
