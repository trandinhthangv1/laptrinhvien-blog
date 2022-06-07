import express from 'express';
import topicController from '@controllers/topic.controller';
import authMiddleware from '@middlewares/auth.middleware';

const router = express.Router();
router
  .route('/')
  .get(topicController.getAll)
  .post(authMiddleware.verifyToken, authMiddleware.checkRoles(['admin']), topicController.createOne);

export default router;
