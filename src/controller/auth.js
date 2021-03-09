import authInstance from '../services/Auth';

class Auth {
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

  async signOut(res, token){
      // TODO: implement sign out method
  }
}

export default Auth;
