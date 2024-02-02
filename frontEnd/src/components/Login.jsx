import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      //   .then((res) => console.log(res))
      //   .then((err) => console.log(err));
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/dashboard");
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email address</strong>
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="email"
              placeholder="name@example.com"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
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
              aria-describedby="passwordHelpInline"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button className="btn btn-success w-100 rounded-0">Log in</button>
          <p>no Account ?</p>
          <Link to="/register" className="btn btn-white w-100 rounded-0">
            create account !
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
