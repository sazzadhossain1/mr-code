import React from "react";
import "./CourseDetailsPage.css";
import { useLoaderData } from "react-router-dom";

const CourseDetailsPage = () => {
  const courseDetailsData = useLoaderData();
  console.log(courseDetailsData);
  return (
    <div className="details-main-div">
      <div className="details-div container">
        <img src={courseDetailsData.img} alt="" />
        <div className="details-text-div">
          <p className="name">{courseDetailsData.name}</p>
          <p className="description">Description</p>
          <p className="lorem-description">{courseDetailsData.description}</p>
          <div className="support-class-projects">
            <div className="class">
              <p>120+</p>
              <p>Total Class</p>
            </div>
            <div className="projects">
              <p>50+</p>
              <p>Total Projects</p>
            </div>
            <div className="support">
              <p>Support 9:00 - 5:00</p>
              <p>Morning to Evening</p>
            </div>
            <div className="teacher">
              <p>20+</p>
              <p>Total Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
