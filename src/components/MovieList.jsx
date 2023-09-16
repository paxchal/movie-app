import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getTopRatedMovies = () => {
    // Replace 'YOUR_API_KEY' with your actual TMDB API key
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results.slice(0, 10)))
      .catch((error) =>
        console.error("Error fetching top-rated movies:", error)
      );
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return (
    <div>
      <ul className="movie-card-li">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
