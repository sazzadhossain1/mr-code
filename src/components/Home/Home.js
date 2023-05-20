import React, { useContext } from "react";
import "./Home.css";
import { AuthContext } from "../../Context/UseContext";
import Carousal from "../Carousol/Carousal";
import Offers from "../Offers/Offers";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Carousal></Carousal>
      <Offers></Offers>
    </div>
  );
};

export default Home;
