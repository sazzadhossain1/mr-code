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
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const UseContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // SignIn With Google //
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // create user //
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User //
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user profile //
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // LogOut User //
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // get current user //
  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubScribe();
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signInWithGoogle,
    loginUser,
    logOutUser,
    updateUserProfile,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UseContext;
