import express from 'express';
import {get} from 'mongoose';
const router = express.Router();
import {authUser, getUserProfile} from '../controllers/userController.js';
import {protect} from '../middleware/authMiddleware.js';

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;