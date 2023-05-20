import React from "react";
import "./CourseDetailsPage.css";
import { useLoaderData } from "react-router-dom";

const CourseDetailsPage = () => {
  const courseDetailsData = useLoaderData();
  console.log(courseDetailsData);
  return (
    <div>
      <img src={courseDetailsData.img} alt="" />
      <p>Name: {courseDetailsData.name}</p>
      <p>{courseDetailsData.description}</p>
    </div>
  );
};

export default CourseDetailsPage;
