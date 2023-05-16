import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const UseContext = ({ children }) => {
  const [user, setUser] = useState(null);

  // SignIn With Google //
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create user //
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User //
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LogOut User //
  const logOutUser = () => {
    return signOut(auth);
  };

  // get current user //
  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null) {
        setUser(currentUser);
      }
    });
    return () => unSubScribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    signInWithGoogle,
    loginUser,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UseContext;
