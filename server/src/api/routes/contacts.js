import express from 'express';
import asyncHandler from 'express-async-handler';
import { getContacts, delContact, addContact } from '../controllers/contacts.js';

const router = express.Router();

router.get('/', asyncHandler(getContacts));
router.delete('/:id', asyncHandler(delContact));
router.post('/', asyncHandler(addContact));

export default router;
