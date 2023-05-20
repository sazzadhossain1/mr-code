import React, { useContext } from "react";
import "./Home.css";
import { AuthContext } from "../../Context/UseContext";
import Carousal from "../Carousol/Carousal";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Carousal></Carousal>
    </div>
  );
};

export default Home;
