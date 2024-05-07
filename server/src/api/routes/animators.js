import express from 'express';
import asyncHandler from 'express-async-handler';
import { getAnimators, delAnimator, addAnimator } from '../controllers/animators.js';

const router = express.Router();

router.get('/', asyncHandler(getAnimators));
router.delete('/:id', asyncHandler(delAnimator));
router.post('/', asyncHandler(addAnimator));

export default router;
