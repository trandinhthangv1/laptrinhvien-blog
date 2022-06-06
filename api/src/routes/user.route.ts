import express from 'express';
import userController from '@controllers/user.controller';
import authMiddleware from '@middlewares/auth.middleware';

const router = express.Router();
router.route('/').get(authMiddleware.verifyToken, authMiddleware.checkRoles(['admin']), userController.getAll);

export default router;
