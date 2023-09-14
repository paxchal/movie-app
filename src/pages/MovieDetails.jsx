import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logoBlack from "../icons/Logo-black.png";
import Home from "../icons/Home.png";
import MovieProjector from "../icons/Movie Projector.png";
import TvShow from "../icons/TV Show.png";
import Calendar from "../icons/Calendar.png";
import Logout from "../icons/Logout.png";

const API_KEY = "768c9eea124bf8e5fb36fd9b917a9974";
const API_URL = "https://api.themoviedb.org/3/movie/";

function MovieDetails() {
  const { movie_id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [credits, setCredits] = useState(null);
  const [trailerThumbnail, setTrailerThumbnail] = useState(null);

  useEffect(() => {
    // Fetch movie details using the movie_id and API key
    fetch(`${API_URL}${movie_id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movie details:", error));

    // Fetch movie credits to get director, writer, and stars
    fetch(`${API_URL}${movie_id}/credits?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setCredits(data))
      .catch((error) => console.error("Error fetching movie credits:", error));

    // Fetch movie videos to get trailer thumbnail
    fetch(`${API_URL}${movie_id}/videos?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const trailer = data.results.find((video) => video.type === "Trailer");
        if (trailer) {
          setTrailerThumbnail(
            `https://img.youtube.com/vi/${trailer.key}/0.jpg`
          );
        }
      })
      .catch((error) => console.error("Error fetching movie videos:", error));
  }, [movie_id]);

  if (!movieDetails || !credits || trailerThumbnail === null) {
    return <div>Loading...</div>;
  }

  const director = credits.crew.find((person) => person.job === "Director");
  const writer = credits.crew.find((person) => person.job === "Writer");
  const stars = credits.cast.slice(0, 5); // Get the top 5 cast members

  return (
    <section className="section-movie-nav">
      <nav>
        <section>
          <img className="nav-logo" src={logoBlack} alt="Movie Logo Black" />
        </section>
        <ul>
          <li>
            <div>
              <img className="nav-icons" src={Home} alt="Home Icon" />
            </div>
            <p className="nav-name">Home</p>
          </li>
          <li>
            <div>
              <img
                className="nav-icons"
                src={MovieProjector}
                alt="MovieProjector Icon"
              />
            </div>
            <p className="nav-name">Movies</p>
          </li>
          <li>
            <div>
              <img className="nav-icons" src={TvShow} alt="TvShow Icon" />
            </div>
            <p className="nav-name">TV Series</p>
          </li>
          <li>
            <div>
              <img className="nav-icons" src={Calendar} alt="Calendar Icon" />
            </div>
            <p className="nav-name">Upcoming</p>
          </li>
          <div className="nav-cta-cnt">
            <div className="nav-cta-des-cnt">
              <p className="des-one">Play movie quizes and earn free tickets</p>
              <p className="des-two">50k people are playing now</p>
            </div>

            <div className="nav-cta-btn-cnt">
              <button className="nav-cta-btn">Start playing</button>
            </div>
          </div>
          <li>
            <div>
              <img className="nav-icons" src={Logout} alt="LogoutIcon" />
            </div>
            <p className="nav-name">Log out</p>
          </li>
        </ul>
      </nav>
      <article>
        <div className="section-movie-details">
          <div className="movie-thumbnail">
            {trailerThumbnail && (
              <img
                className="trailer-thumbnail"
                src={trailerThumbnail}
                alt="Trailer Thumbnail"
              />
            )}
          </div>
          <p className="movie-details-title">{movieDetails.title}</p>
          <p className="movie-detail-rating">
            Rating: <span>{movieDetails.vote_average} </span>/ 10
          </p>
          <div className="movie-desctiption">{movieDetails.overview}</div>
          <div className="showtimes-btn-cnt">SEE SHOWTIME</div>
          <div className="more-btn-cnt"> MORE WATCH OPTION</div>
          <div className="movie-director">
            DIRECTOR {director ? director.name : "Not available"}
          </div>
          <div className="sugessted-movies">IMAGES</div>
          <div className="movie-writer">
            Writer: {writer ? writer.name : "Not available"}
          </div>
          <div className="movie-stars">
            Stars: {stars.map((star) => star.name).join(", ")}
          </div>
          <div className="movie-top-position">BUTTON</div>
        </div>
      </article>
    </section>
  );
}

export default MovieDetails;
