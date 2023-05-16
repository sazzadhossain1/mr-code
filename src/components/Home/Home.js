import React, { useContext } from "react";
import "./Home.css";
import { AuthContext } from "../../Context/UseContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1>This is Home</h1>
    </div>
  );
};

export default Home;
