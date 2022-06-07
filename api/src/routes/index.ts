import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import topicRoutes from './topic.route';

const router = express.Router();
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/topics', topicRoutes);

export default router;
