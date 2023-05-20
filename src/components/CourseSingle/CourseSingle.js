import React from "react";
import "./CourseSingle.css";
import { Link } from "react-router-dom";

const CourseSingle = ({ data }) => {
  const { name, img, id } = data;
  console.log();
  return (
    <div className="single-course-parent-div">
      <div className="single-course-div">
        <h1 className="course-name">{name}</h1>
        <img className="course-img" src={img} alt="" />

        <Link to={`/courseDetailsPage/${id}`}>
          <button className="course-details-btn">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseSingle;
