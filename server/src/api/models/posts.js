import { v4 as uuidv4 } from 'uuid';
import { query } from '../../db/index.js';

const dbGetPosts = async () => {
  const { rows } = await query(
    'SELECT posts.post_id, title, content, created_at, image_url FROM posts LEFT JOIN images ON posts.post_id = images.post_id ;',
  );
  return rows;
};

const dbGetPost = async (id) => {
  const { rows } = await query('SELECT * FROM posts WHERE post_id = $1;', [id]);
  return rows[0];
};

const dbDelPost = async (id) => {
  await query('DELETE FROM posts WHERE post_id = $1;', [id]);
};

const dbCreatePost = async (title, content) => {
  const { rows } = await query(
    'INSERT INTO posts (post_id, title, content) VALUES ($1, $2, $3) RETURNING post_id;',
    [uuidv4(), title, content],
  );
  return rows[0];
};

const dbUploadImage = async (id, url) => {
  await query('INSERT INTO images (image_id, post_id, image_url) VALUES ($1, $2, $3);', [
    uuidv4(),
    id,
    url,
  ]);
};

export { dbGetPosts, dbGetPost, dbDelPost, dbCreatePost, dbUploadImage };
