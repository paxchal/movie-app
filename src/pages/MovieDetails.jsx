// MovieDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "768c9eea124bf8e5fb36fd9b917a9974"; // Replace with your API key
const API_URL = "https://api.themoviedb.org/3/movie/";

function MovieDetails() {
  const { movie_id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Fetch movie details using the movie_id and API key
    fetch(`${API_URL}${movie_id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [movie_id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  // Render movie details using the movieDetails object
  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      {/* Add more movie details here */}
    </div>
  );
}

export default MovieDetails;
