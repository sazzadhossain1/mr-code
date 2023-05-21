import React, { useContext } from "react";
import "./Home.css";
import { AuthContext } from "../../Context/UseContext";
import Carousal from "../Carousol/Carousal";
import Offers from "../Offers/Offers";
import UpcomingCourses from "../UpcomingCourses/UpcomingCourses";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Carousal></Carousal>
      <Offers></Offers>
      <UpcomingCourses></UpcomingCourses>
    </div>
  );
};

export default Home;
