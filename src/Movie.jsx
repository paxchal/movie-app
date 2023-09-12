import React, from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function Movie() {
  return (
    <div className="center">
      <div className="movies-title">
        <p>Featured Movie</p>
        <a href="#">See more</a>
      </div>

      <MovieList />
    </div>
  );
}

export default Movie;
