import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results.slice(0, 10)))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <ul className="movie-card-li ">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} /> // Pass the movie object as a prop
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
