import {
  dbGetAnimators,
  dbGetAnimator,
  dbDelAnimator,
  dbAddAnimator,
} from '../models/animators.js';

const getAnimators = async (req, res) => {
  const animators = await dbGetAnimators();
  res.status(200).json(animators);
};

const delAnimator = async (req, res) => {
  const { id } = req.params;
  const animator = await dbGetAnimator(id);
  if (!animator) return res.status(404).send('There is no animator with this ID');
  if (animator) await dbDelAnimator(id);
  return res.status(200).send('Animator deleted');
};

const addAnimator = async (req, res) => {
  const { name, dateOfBirth, aboutMe, image } = req.body;
  const animator = await dbAddAnimator(name, dateOfBirth, aboutMe, image);
  return res.status(201).json(animator);
};

export { getAnimators, delAnimator, addAnimator };
