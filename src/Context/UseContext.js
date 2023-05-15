import React, { createContext } from "react";
import app from "../firebase/firebase.init";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const UseContext = ({ children }) => {
  const displayName = {
    name: "Sazzad Hossain",
  };

  const authInfo = {
    displayName,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UseContext;
