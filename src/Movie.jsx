import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function Movie() {
  return (
    <section className="movies-cont">
      <div className="center">
        <div className="movies-title">
          <p className="featured-movie">Top Movie</p>
          <a className="see-more" href="https://google.com">
            <span>See more</span> <span> &#62;</span>
          </a>
        </div>
        <div className="small-screen-center">
          <MovieList />
        </div>
      </div>
    </section>
  );
}

export default Movie;
