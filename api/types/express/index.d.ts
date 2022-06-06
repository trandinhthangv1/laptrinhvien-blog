declare namespace Express {
  interface Request {
    user: { _id: string; username: string; password: string; avatar: string; role: string | 'member' };
  }
}
