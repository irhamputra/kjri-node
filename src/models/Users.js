import { db } from '../utils/firebase';

class Users {
  async findOne(fieldPath, operator, value) {
    return await db.collection('Users').where(fieldPath, operator, value).limit(1).get();
  }

  async findOneByEmail(email) {
    return await db.collection('Users').where('email', '==', email).limit(1).get();
  }

  async findAllUsers() {
    return await db.collection('Users').get();
  }
}

export default Users;
