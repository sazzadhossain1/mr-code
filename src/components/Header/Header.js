import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UseContext";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(user);

  // dark mode and light mode toggle function //
  const [theme, setTheme] = useState("light-theme");
  const handleDarkAndLightMood = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  //////////////////////////////////////////////

  // LogOUt Function //
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("user Logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/courses">Courses</Link>
            </li>

            {user?.uid ? (
              <li>
                <button onClick={handleLogOut}>SignOut</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          Mr-Code
        </Link>
        <small tabIndex={0} className="lg:hidden text-2xl">
          {user?.displayName}
        </small>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>

          {user?.uid ? (
            <li>
              <button onClick={handleLogOut}>SignOut</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
        {user?.displayName}
      </div>
      <div className="navbar-end">
        <Link className="btn" onClick={handleDarkAndLightMood}>
          {theme === "light-theme" ? "dark" : "light"}
        </Link>
      </div>
    </div>
  );
};

export default Header;
