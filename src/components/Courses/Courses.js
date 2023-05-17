import React from "react";
import "./Courses.css";
import { Link, useLoaderData } from "react-router-dom";
import CourseSingle from "../CourseSingle/CourseSingle";

const Courses = () => {
  const getApi = useLoaderData();
  // console.log(getApi);
  return (
    <div>
      <h1 className="heading-courses">All Courses</h1>
      <div className="grid-courses-div">
        <div className="all-link-div">
          <h1>All Links</h1>
          <Link>HTML</Link>
          <br />
          <Link>Css</Link> <br />
          <Link>Bootstrap</Link>
          <br />
          <Link>Tailwind</Link>
          <br />
          <Link>Javascript</Link>
          <br />
          <Link>React</Link>
        </div>

        <div className="map-div container">
          {getApi.map((data) => (
            <CourseSingle data={data} key={data.id}></CourseSingle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
