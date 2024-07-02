// getUser.js
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../components/formHandling/firebase'; // Adjust the import path as needed

const getrole = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return userDoc.data().role;
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (e) {
    console.error("Error getting user role: ", e);
    return null;
  }
};

export default getrole;
