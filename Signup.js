import React, { useState } from "react";
import Navbar from "./Navbar";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Signup Successful");
  }

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card p-4 mx-auto" style={{ maxWidth: "500px" }}>

          <h2 className="text-center mb-4">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Sign Up
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Signup;