import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/register", values)
      //   .then((res) => console.log(res))
      //   .then((err) => console.log(err));
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/login");
        } else {
          alert("Error");
        }
      })
      .then((err) => {});
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 ">
              <label htmlFor="name">
                <strong>name</strong>
              </label>
              <input
                type="text"
                id="Name"
                className="form-control rounded-0"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email address</strong>
              </label>
              <input
                type="email"
                className="form-control rounded-0"
                id="email"
                placeholder="name@example.com"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                id="password"
                className="form-control rounded-0"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <button className="btn btn-success w-100 rounded-0">sign up</button>
          </form>
          <p>You are agree to our terms and policies</p>
          <Link to="/login" className="btn btn-white w-100 rounded-0">
            {" "}
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
