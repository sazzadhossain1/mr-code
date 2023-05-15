import React, { useContext } from "react";
import "./Home.css";
import { AuthContext } from "../../Context/UseContext";

const Home = () => {
  const { displayName } = useContext(AuthContext);
  console.log(displayName);
  return (
    <div>
      <h1>This is Home</h1>
      <p>{displayName.name}</p>
    </div>
  );
};

export default Home;
