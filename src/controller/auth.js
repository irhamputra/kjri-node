import authInstance from '../services/Auth';
import { auth } from '../utils/firebase';

class Auth {
  /**
   * @param res: Express Response
   * @param password: string
   * @param email: string
   * @return {Promise<void>}
   */
  async signIn(res, { password, email } = { email: '', password: '' }) {
    try {
      const { data } = await authInstance.post('/accounts:signInWithPassword', {
        email,
        password,
        returnSecureToken: true,
      });

      res.status(200).json(data);
      res.end();
    } catch (e) {
      res.status(500).json({ message: 'Email tidak ditemukan' });
      res.end();
    }
  }

  /**
   * @param res: Express Response
   * @param token
   * @return {Promise<void>}
   */
  async signOut(res, token) {
    try {
      const verifyToken = await auth.verifyIdToken(token, true);
      await auth.revokeRefreshTokens(verifyToken.uid);

      await verifyToken;

      res.status(200).json({ message: 'Sign Out berhasil' });
      res.end();
    } catch (e) {
      res.status(500).json({ message: 'Tidak ada akun yang terautentifikasi' });
      res.end();
    }
  }
}

export default Auth;
