import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function Movie() {
  return (
    <section className="movies-cont">
      <div className="center">
        <div className="movies-title">
          <p>Featured Movie</p>
          <a className="see-more" href="https://google.com">
            <span>See more</span> <span> &#62;</span>
          </a>
        </div>

        <MovieList />
      </div>
    </section>
  );
}

export default Movie;
