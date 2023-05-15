import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl font-bold my-6">Please SignUp now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
              </div>

              <h1>
                Already have an account?
                <Link style={{ color: "green" }} to="/login">
                  Please login
                </Link>
              </h1>

              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>

            <button className="googleBtn btn btn-primary">
              <p className="ml-5">SignIn With Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
