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
          <Link to={`/courseDetailsPage/${getApi[0].id}`}>HTML</Link>
          <br />
          <Link to={`/courseDetailsPage/${getApi[1].id}`}>Css</Link> <br />
          <Link to={`/courseDetailsPage/${getApi[2].id}`}>Bootstrap</Link>
          <br />
          <Link to={`/courseDetailsPage/${getApi[3].id}`}>Tailwind</Link>
          <br />
          <Link to={`/courseDetailsPage/${getApi[4].id}`}>Javascript</Link>
          <br />
          <Link to={`/courseDetailsPage/${getApi[5].id}`}>React</Link>
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
