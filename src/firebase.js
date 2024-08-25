import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDseKULTFgX55zmxxxQV1TFhyr3EYudVt4",
  authDomain: "movieflix-clone-9aee1.firebaseapp.com",
  projectId: "movieflix-clone-9aee1",
  storageBucket: "movieflix-clone-9aee1.appspot.com",
  messagingSenderId: "756612636332",
  appId: "1:756612636332:web:a6cb763a717f7558664909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign up function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Add user details to Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    
    return user; // Return user for further use if needed
  } catch (error) {
    console.error("Error signing up:", error);
    throw new Error(error.message); // Throw error to be handled in the component
  }
};

// Login function
const login = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user; // Return user object for further use if needed
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error(error.message); // Throw error to be handled in the component
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
    throw new Error(error.message); // Throw error to be handled in the component
  }
};

// Export functions for use in components
export { auth, db, login, signup, logout };
