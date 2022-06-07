import express from 'express';
import postController from '@controllers/post.controller';
import authMiddleware from '@middlewares/auth.middleware';

const router = express.Router();

router
  .route('/')
  .get(postController.getAll)
  .post(authMiddleware.verifyToken, authMiddleware.checkRoles(['admin']), postController.createOne);

router.route('/:id').get(postController.getOneById);

export default router;
