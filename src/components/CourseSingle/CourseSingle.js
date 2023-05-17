import React from "react";
import "./CourseSingle.css";
import { Link } from "react-router-dom";

const CourseSingle = ({ data }) => {
  const { name, img } = data;
  console.log();
  return (
    <div>
      <div>
        <h1 style={{ font: "50px" }}>Side nav</h1>
      </div>
      <div>
        <img style={{ height: "100px" }} src={img} alt="" />
      </div>
    </div>
  );
};

export default CourseSingle;
