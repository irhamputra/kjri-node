import { db } from '../utils/firebase';

class Users {
  /**
   * @param fieldPath
   * @param operator
   * @param value
   * @return {Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>>}
   */
  async findOne(fieldPath, operator, value) {
    return await db.collection('Users').where(fieldPath, operator, value).limit(1).get();
  }

  /**
   * @param email
   * @return {Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>>}
   */
  async findOneByEmail(email) {
    return await db.collection('Users').where('email', '==', email).limit(1).get();
  }

  /**
   * @return {Promise<FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>>}
   */
  async findAllUsers() {
    return await db.collection('Users').get();
  }
}

export default Users;
