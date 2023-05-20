import React from "react";
import "./CourseDetailsPage.css";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetailsPage = () => {
  const courseDetailsData = useLoaderData();
  console.log(courseDetailsData);
  return (
    <div className="details-main-div">
      <div className="details-div container">
        <img className="img" src={courseDetailsData.img} alt="" />
        <div className="details-text-div">
          <p className="name">{courseDetailsData.name}</p>
          <p className="description">Description</p>
          <p className="lorem-description">{courseDetailsData.description}</p>
          <div className="support-class-projects">
            <div className="class">
              <p className="number">120+</p>
              <p className="text">Total Class</p>
            </div>
            <div className="projects">
              <p className="number">50+</p>
              <p className="text">Total Projects</p>
            </div>
            <div className="support">
              <p className="number">Support 9:00 - 5:00</p>
              <p className="text">Morning to Evening</p>
            </div>
            <div className="teacher">
              <p className="number">20+</p>
              <p className="text">Total Teacher</p>
            </div>
          </div>
          <Link to="/courses">
            <button className="another-course-btn">Another Course</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
