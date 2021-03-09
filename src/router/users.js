import express from 'express';
import Auth from '../controller/auth';

const router = express.Router();
const auth = new Auth();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'User Route GET' });
  res.end();
});

router.post(
  '/sign-in',
  // Middleware
  (req, res, next) => {
    if (!req.body || (!req.body.email && !req.body.password)) {
      res.status(404).json({ message: 'Email dan Password tidak ditemukan' });
      res.end();
    }

    next();
  },
  async (req, res) => {
    await auth.signIn(res, req.body);

    res.status(200).json({ message: 'Sign In User' });
    res.end();
  }
);

router.post('/sign-up', (req, res) => {
  res.status(200).json({ message: 'Sign Up User' });
});

router.post(
  '/sign-out',
  // Middleware
  (req, res, next) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.replace('Bearer ');
      if (token) {
        next();
      } else {
        res.status(402).json({ message: 'Anda tidak terautentifikasi' });
        res.end();
      }
    }
  },
  async (req, res) => {
    const token = req.headers.authorization.replace('Bearer ');
    await auth.signOut(res, token);

    res.status(200).json({ message: 'Sign Out User' });
    res.end();
  }
);

module.exports = router;
