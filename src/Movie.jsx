import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function Movie() {
  return (
    <section className="movies-cont center">
      <div className="movies-title">
        <p>Featured Movie</p>
        <a href="https://google.com">See more</a>
      </div>

      <MovieList />
    </section>
  );
}

export default Movie;
