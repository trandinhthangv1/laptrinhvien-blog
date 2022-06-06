import User from '@models/user.model';

const getAll = async () => {
  const users = await User.find().select('-password');
  return users;
};

export default { getAll };
