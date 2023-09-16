import React, { Component } from "react";
import MovieRating from "../icons/movie-rating.png";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    // Construct the full URL to the movie poster using the base TMDB image URL
    const baseImageUrl = "https://image.tmdb.org/t/p/w500"; // You can choose a different size if needed
    const posterUrl = baseImageUrl + movie.poster_path;

    return (
      <div className="link-container">
        <Link to={`/movie/${movie.id}`} className="view-movie-details">
          <div className="movie-card" data-testid="movie-card">
            <img
              className="poster-img"
              data-testid="movie-poster"
              src={posterUrl}
              alt={movie.title}
            />

            <p className="movie-country">USA, 2021 {movie.country}</p>

            <h2 className="movie-title" data-testid="movie-title">
              {movie.title}
            </h2>
            <p className="movie-rating">
              <img
                className="movie-rating-icon"
                src={MovieRating}
                alt="Movie Rating Icon"
              />
              {movie.rating}
            </p>

            <p className="release-date" data-testid="movie-release-date">
              Release Date: {movie.release_date}
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default MovieCard;
