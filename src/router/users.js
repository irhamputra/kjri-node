import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'User Route GET' });
});

router.post('/sign-in', (req, res) => {
  res.status(200).json({ message: 'Sign In User' });
});

router.post('/sign-up', (req, res) => {
  res.status(200).json({ message: 'Sign Up User' });
});

router.post('/sign-out', (req, res) => {
  res.status(200).json({ message: 'Sign Out User' });
});

module.exports = router;
