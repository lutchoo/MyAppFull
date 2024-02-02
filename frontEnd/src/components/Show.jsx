import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Show() {
  const [showId, setShowId] = useState([]);
  const { id } = useParams();
  const showMovie = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzQyMmZmY2Q1ZjgyMmM1YjRmODlhMmQyODUyNWNiNSIsInN1YiI6IjY1YWU2YzlhODQ4ZWI5MDBlYTE5YTVhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6a1PNpvYSASj_izQspeDggIfo40Hm3WQRQBNSbP9VeY",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setShowId(response))
      .catch((err) => console.error(err));
  };
  console.log(showId);
  useEffect(() => {
    showMovie();
  }, [id]);

  return (
    <>
      <div className="card text-bg-dark">
        <div className="card-img-top center">
          {showId.poster_path && (
            <img
              class="img-thumbnail"
              src={`https://image.tmdb.org/t/p/w500${showId.poster_path}`}
              alt=""
            />
          )}
          <h5 className="card-title">{showId.title}</h5>
          <p className="card-text">{showId.overview}</p>
          {showId.genres &&
            showId.genres.map((genre, index) => (
              <p className="card-text" key={index}>
                {genre.name}
              </p>
            ))}

          <small>Last updated 3 mins ago</small>
        </div>
      </div>
      <div>
        <h1></h1>
      </div>
      <span>{showId.popularity}/10</span>
      <ul></ul>* <div></div>
      <div>
        <p></p>
      </div>
    </>
  );
}

export default Show;
