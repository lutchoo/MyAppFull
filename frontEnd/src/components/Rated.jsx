import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../App.css";
import { Link } from "react-router-dom";

function Rated() {
  const [moviesRated, setMoviesRated] = useState([]);
  const getMoviesRated = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=97422ffcd5f822c5b4f89a2d28525cb5&page=1"
    )
      .then((res) => res.json())
      .then((json) => setMoviesRated(json.results));
  };
  console.log(moviesRated);
  useEffect(() => {
    getMoviesRated();
  }, []);
  return (
    <>
      <section id="rated">
        <h3>Films noter</h3>
        <div
          id="my-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {moviesRated.map((movie, index) => (
              <div
                key={movie.id}
                className={
                  index === 0 ? "carousel-item active" : "carousel-item"
                }
                data-bs-interval="4000"
              >
                <section className="container-carousel">
                  <div id="img_carousel">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      className=" img-fluid "
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
            data-bs-target="#my-carousel"
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
            data-bs-target="#my-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Rated;
