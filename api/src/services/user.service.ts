import User from '@models/user.model';

const getAll = async () => {
  const users = await User.find().select('-password').sort({ createdAt: 'desc' });
  return users;
};

export default { getAll };
