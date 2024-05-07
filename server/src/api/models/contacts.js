import { query } from '../../db/index.js';

const dbGetContacts = async () => {
  const { rows } = await query('SELECT * FROM contacts;');
  return rows;
};

export { dbGetContacts };
