// addUser.js
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../components/formHandling/firebase'; // Adjust the import path as needed

const adduser = async (userId, role) => {
  try {
    await setDoc(doc(db, "users", userId), {
      role: role,
    });
    console.log("User added with role:", role);
  } catch (e) {
    console.error("Error adding user: ", e);
  }
};

export default adduser;
