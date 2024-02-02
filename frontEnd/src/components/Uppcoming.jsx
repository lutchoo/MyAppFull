import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import { Link } from "react-router-dom";

function Uppcoming() {
  const [moviesUpp, setMoviesUpp] = useState([]);
  const showMovieUpp = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzQyMmZmY2Q1ZjgyMmM1YjRmODlhMmQyODUyNWNiNSIsInN1YiI6IjY1YWU2YzlhODQ4ZWI5MDBlYTE5YTVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6a1PNpvYSASj_izQspeDggIfo40Hm3WQRQBNSbP9VeY",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMoviesUpp(response.results))
      .catch((err) => console.error(err));
  };
  //   console.log(moviesUpp);
  useEffect(() => {
    showMovieUpp();
  }, []);
  return (
    <>
      {" "}
      <h3>Films A venir</h3>
      <div id="my-carrousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {moviesUpp.map((movie, index) => (
            <div
              key={movie.id}
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              data-bs-interval="4000"
            >
              <section className="container-carousel">
                <div className="img_carousel">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="d-block w-30 "
                    alt={`Movie ${index + 1}`}
                  />
                </div>

                <div className="detail_carousel">
                  <div className="contener-detail">
                    <h3>{movie.title}</h3>
                    <div className="carousel-overview">
                      <p>{movie.overview}</p>
                    </div>
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
              </section>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#my-carrousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#my-carrousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Uppcoming;
