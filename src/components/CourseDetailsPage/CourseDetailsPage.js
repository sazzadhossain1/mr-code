import React from "react";
import "./CourseDetailsPage.css";
import { useLoaderData } from "react-router-dom";

const CourseDetailsPage = () => {
  const courseDetailsData = useLoaderData();
  console.log(courseDetailsData);
  return <div></div>;
};

export default CourseDetailsPage;
