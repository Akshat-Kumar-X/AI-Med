import React from "react";
import { Link } from "react-router-dom";

const Auth = ({
  title,
  description,
  button,
  bottomlink,
  bottomquestion,
  bottomtext,
  email,
  password,
  name,
  setEmail,
  setPassword,
  setName,
}) => {
  
  return (
    <div className="hero min-h-screen bg-gray-100 pt-0 justify-center ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10  mb-auto mt-10">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Email address"
                className="input input-bordered bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {setName && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="input input-bordered bg-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password (Min. 8 characters)</span>
              </label>
              <input
                type="password"
                placeholder="Create a Strong password"
                className="input input-bordered mb-5 bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {button}
            <span className="text-center mt-5">
              <p>{bottomquestion}</p>
              <Link to={bottomlink} className="link">
                {bottomtext}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
