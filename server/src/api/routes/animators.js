import express from 'express';
import asyncHandler from 'express-async-handler';
import { getAnimators } from '../controllers/animators.js';

const router = express.Router();

router.get('/', asyncHandler(getAnimators));

export default router;
