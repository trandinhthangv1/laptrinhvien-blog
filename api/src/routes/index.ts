import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import topicRoutes from './topic.route';
import postRoutes from './post.route';

const router = express.Router();
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/topics', topicRoutes);
router.use('/posts', postRoutes);

export default router;
