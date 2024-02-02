import React, { useEffect, useState } from "react";
import "../app.css";
import { Link } from "react-router-dom";

function Discover() {
  const [discov, setDiscov] = useState([]);
  const fetchDiscov = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzQyMmZmY2Q1ZjgyMmM1YjRmODlhMmQyODUyNWNiNSIsInN1YiI6IjY1YWU2YzlhODQ4ZWI5MDBlYTE5YTVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6a1PNpvYSASj_izQspeDggIfo40Hm3WQRQBNSbP9VeY",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => setDiscov(response.results))
      .catch((err) => console.error(err));
  };

  console.log(discov);
  useEffect(() => {
    fetchDiscov();
  }, []);
  return (
    <>
      <section id="discover">
        {discov.map((movie, index) => (
          <div key={index} className="card " style={{ width: "18rem" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <div className="d-grid gap-2 col-6 mx-auto">
                <Link
                  className="btn btn-primary centrer"
                  to={`/show/${movie.id}`}
                >
                  show
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Discover;
