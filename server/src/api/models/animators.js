import { query } from '../../db/index.js';

const dbGetAnimators = async () => {
  const { rows } = await query('SELECT * FROM animators;');
  return rows;
};

export { dbGetAnimators };
