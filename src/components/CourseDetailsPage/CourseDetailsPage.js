import React from "react";
import "./CourseDetailsPage.css";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetailsPage = () => {
  const courseDetailsData = useLoaderData();
  // console.log(courseDetailsData);

  const ref = useRef();
  return (
    <div className="details-main-div">
      <div ref={ref} className="details-div container">
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
          <ReactToPrint
            trigger={() => (
              <button className="another-course-btn">Download PDF</button>
            )}
            content={() => ref.current}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
