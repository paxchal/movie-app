import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    // Construct the full URL to the movie poster using the base TMDB image URL
    const baseImageUrl = "https://image.tmdb.org/t/p/w500"; // You can choose a different size if needed
    const posterUrl = baseImageUrl + movie.poster_path;

    return (
      <div className="movie-card">
        <img className="poster-img" src={posterUrl} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
      </div>
    );
  }
}

export default MovieCard;
