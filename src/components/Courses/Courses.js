import React from "react";
import "./Courses.css";
import { useLoaderData } from "react-router-dom";
import CourseSingle from "../CourseSingle/CourseSingle";

const Courses = () => {
  const getApi = useLoaderData();
  // console.log(getApi);
  return (
    <div>
      <h1 className="heading-courses">All Courses</h1>
      {getApi.map((data) => (
        <CourseSingle data={data} key={data.id}></CourseSingle>
      ))}
    </div>
  );
};

export default Courses;
