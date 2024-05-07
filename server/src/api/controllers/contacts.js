import { dbGetContacts } from '../models/contacts.js';

const getContacts = async (req, res) => {
  const contacts = await dbGetContacts();
  res.status(200).json(contacts);
};

export { getContacts };
