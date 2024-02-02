import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Search() {
  const [multi, setMulti] = useState([]);
  const { query } = useParams();
  const fetchMulti = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzQyMmZmY2Q1ZjgyMmM1YjRmODlhMmQyODUyNWNiNSIsInN1YiI6IjY1YWU2YzlhODQ4ZWI5MDBlYTE5YTVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6a1PNpvYSASj_izQspeDggIfo40Hm3WQRQBNSbP9VeY",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMulti(response.results))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchMulti();
  }, [query]);

  return (
    <div id="search">
      {multi.map((movie, index) => (
        <div key={index} className="card " style={{ width: "18rem" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="img-fluid"
            alt={movie.name}
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
    </div>
  );
}

export default Search;
