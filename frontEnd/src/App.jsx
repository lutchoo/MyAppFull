import { useState, useEffect } from "react";
import React from "react";
import ticketImage from "./assets/ticket-2974645_1280.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function App() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8081")
      //   .then((res) => console.log(res))
      //   .then((err) => console.log(err));
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  }, []);
  const handleDelete = () => {
    axios
      .get("http://localhost:8081/logout")
      .then((res) => {
        location.reload(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <section id="first">
        <div id="image">
          <img className="img-fluid" src={ticketImage} alt="" />
        </div>
        <div id="inscription">
          <h2>Retrouver vos films et series preferer</h2>
          <p>
            L'inscription vous permet de partager de nombreux films et séries
            populaires,de donner votre avis et faire decouvrir aux autres vos
            films et series préférer.
          </p>
          <div>
            {auth ? (
              <div>
                <h3>you are authorized--- {name}</h3>
                <button className="btn btn-danger" onClick={handleDelete}>
                  logout
                </button>
              </div>
            ) : (
              <div>
                {/* <h3>{message}</h3>
                <h3>Login Now</h3>
                <Link to="/login">Login</Link> */}
                <Link className="btn btn-primary btn-lg" to={"/login"}>
                  connection
                </Link>
                <Link className="btn btn-primary btn-lg" to={"/register"}>
                  inscription
                </Link>
              </div>
            )}
          </div>
          {/* <button className="btn btn-primary">connection</button>
          <button className="btn btn-primary">inscription</button> */}
        </div>
      </section>
      <section id="second">
        <div></div>
        <div></div>
      </section>
    </>
  );
}

export default App;
