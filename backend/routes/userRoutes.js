import express from 'express';
import { authUser } from '../controllers/userController.js';
//imp to specify .js above

const router = express.Router();

router.post('/auth', authUser);

export default router;
