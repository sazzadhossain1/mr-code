import React from "react";
import "./UpcomingCourses.css";

const UpcomingCourses = () => {
  return (
    <div className="">
      <div className="upcomingCourses-parent-div container mx-auto">
        <h1 className="upcoming-course-heading ">Our UpcomingCourses</h1>
        <div className="upcoming-course-grid-div ">
          <div className="upcoming-single-cart mx-auto">
            <div className="upcoming-course-photo-div">
              <img
                className="upcoming-course-photo"
                src="https://ninzio.com/edukul/wp-content/uploads/2019/10/course1-770x450.jpg"
                alt=""
              />
              <div className="price">Price - $30</div>
            </div>
            <h2 className="management-heading">Computer Management</h2>
            <p className="admin-p">
              Lecturer <span className="admin">admin</span> in
              <span className="technology">Technology</span>
            </p>
            <hr />
            <div className="user-flex-div">
              <p>User: 0</p>
              <p>Time: 18h 30m</p>
              <p>5 Lessons</p>
            </div>
          </div>
          <div className="upcoming-single-cart mx-auto">
            <div className="upcoming-course-photo-div">
              <img
                className="upcoming-course-photo"
                src="https://ninzio.com/edukul/wp-content/uploads/2019/10/course2-770x450.jpg"
                alt=""
              />
              <div className="price">Price - $30</div>
            </div>
            <h2 className="management-heading">Computer Management</h2>
            <p className="admin-p">
              Lecturer <span className="admin">admin</span> in
              <span className="technology">Technology</span>
            </p>
            <hr />
            <div className="user-flex-div">
              <p>User: 0</p>
              <p>Time: 18h 30m</p>
              <p>5 Lessons</p>
            </div>
          </div>
          <div className="upcoming-single-cart  mx-auto">
            <div className="upcoming-course-photo-div">
              <img
                className="upcoming-course-photo"
                src="https://ninzio.com/edukul/wp-content/uploads/2019/10/course3-770x450.jpg"
                alt=""
              />
              <div className="price">Price - $30</div>
            </div>
            <h2 className="management-heading">Computer Management</h2>
            <p className="admin-p">
              Lecturer <span className="admin">admin</span> in
              <span className="technology">Technology</span>
            </p>
            <hr />
            <div className="user-flex-div">
              <p>User: 0</p>
              <p>Time: 18h 30m</p>
              <p>5 Lessons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCourses;
