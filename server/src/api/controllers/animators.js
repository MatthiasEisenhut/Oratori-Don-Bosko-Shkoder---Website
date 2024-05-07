import { dbGetAnimators } from '../models/animators.js';

const getAnimators = async (req, res) => {
  const animators = await dbGetAnimators();
  res.status(200).json(animators);
};

export { getAnimators };
