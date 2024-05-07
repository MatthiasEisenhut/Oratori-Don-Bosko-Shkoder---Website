import { v4 as uuidv4 } from 'uuid';
import { query } from '../../db/index.js';

const dbGetContacts = async () => {
  const { rows } = await query('SELECT * FROM contacts;');
  return rows;
};

const dbGetContact = async (id) => {
  const { rows } = await query('SELECT * FROM contacts WHERE contact_id = $1;', [id]);
  return rows[0];
};

const dbDelContact = async (id) => {
  await query('DELETE FROM contacts WHERE contact_id = $1;', [id]);
};

const dbAddContact = async (name, email, phone, image) => {
  const { rows } = await query(
    'INSERT INTO contacts (contact_id, name, email, phone, image) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
    [uuidv4(), name, email, phone, image],
  );
  return rows[0];
};

export { dbGetContacts, dbGetContact, dbDelContact, dbAddContact };
