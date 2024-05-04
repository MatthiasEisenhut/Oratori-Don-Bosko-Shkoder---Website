import { dbGetPosts, dbGetPost, dbDelPost, dbUploadImage, dbCreatePost } from '../models/posts.js';

const getPosts = async (req, res) => {
  const posts = await dbGetPosts();
  res.status(200).json(posts);
};

const delPost = async (req, res) => {
  const { id } = req.params;
  const post = await dbGetPost(id);
  if (!post) return res.status(404).send('There is no post with this ID');
  if (post) await dbDelPost(id);
  return res.status(200).send('Post deleted');
};

const createPost = async (req, res) => {
  const { title, content, images } = req.body;
  const post = await dbCreatePost(title, content);
  // eslint-disable-next-line no-restricted-syntax
  for (const image of images) {
    // eslint-disable-next-line no-await-in-loop
    await dbUploadImage(post.post_id, image);
  }
  return res.status(201).json(post);
};

export { getPosts, delPost, createPost };
