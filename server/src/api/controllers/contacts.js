import { dbGetContacts, dbGetContact, dbDelContact, dbAddContact } from '../models/contacts.js';

const getContacts = async (req, res) => {
  const contacts = await dbGetContacts();
  res.status(200).json(contacts);
};

const delContact = async (req, res) => {
  const { id } = req.params;
  const contact = await dbGetContact(id);
  if (!contact) return res.status(404).send('There is no contact with this ID');
  if (contact) await dbDelContact(id);
  return res.status(200).send('Contact deleted');
};

const addContact = async (req, res) => {
  const { name, email, phone, image } = req.body;
  const contact = await dbAddContact(name, email, phone, image);
  return res.status(201).json(contact);
};

export { getContacts, delContact, addContact };
