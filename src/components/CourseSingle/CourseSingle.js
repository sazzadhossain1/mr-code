import React from "react";
import "./CourseSingle.css";
import { Link } from "react-router-dom";

const CourseSingle = ({ data }) => {
  const { name, img } = data;
  console.log();
  return (
    <div className="single-course-parent-div">
      <div className="single-course-div">
        <h1 style={{ font: "50px" }}>Side nav</h1>

        <img style={{ height: "200px" }} src={img} alt="" />
      </div>
    </div>
  );
};

export default CourseSingle;
