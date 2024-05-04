import express from 'express';
import asyncHandler from 'express-async-handler';
import { getPosts, delPost, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', asyncHandler(getPosts));
router.delete('/:id', asyncHandler(delPost));
router.post('/', asyncHandler(createPost));

export default router;
