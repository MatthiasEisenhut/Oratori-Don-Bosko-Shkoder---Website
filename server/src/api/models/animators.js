import { v4 as uuidv4 } from 'uuid';
import { query } from '../../db/index.js';

const dbGetAnimators = async () => {
  const { rows } = await query('SELECT * FROM animators;');
  return rows;
};

const dbGetAnimator = async (id) => {
  const { rows } = await query('SELECT * FROM animators WHERE animator_id = $1;', [id]);
  return rows[0];
};

const dbDelAnimator = async (id) => {
  await query('DELETE FROM animators WHERE animator_id = $1', [id]);
};

const dbAddAnimator = async (name, dateOfBirth, aboutMe, image) => {
  const { rows } = await query(
    'INSERT INTO animators (animator_id, name, dateOfBirth, aboutMe, image) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
    [uuidv4(), name, dateOfBirth, aboutMe, image],
  );
  return rows[0];
};

export { dbGetAnimators, dbGetAnimator, dbDelAnimator, dbAddAnimator };
