import express from 'express';
import asyncHandler from 'express-async-handler';
import { getContacts } from '../controllers/contacts.js';

const router = express.Router();

router.get('/', asyncHandler(getContacts));

export default router;
