import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    // Fetch suggestions only if the search term is not empty
    if (newSearchTerm.trim() !== "") {
      fetchSearchSuggestions(newSearchTerm);
    } else {
      setSearchResults([]); // Clear suggestions if the search term is empty
    }
  };

  const fetchSearchSuggestions = (term) => {
    setLoading(true);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setLoading(false);
      });
  };

  return (
    <div className="form-cnt">
      <form>
        <input
          className="search-input"
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>
      {loading && <p>Loading...</p>}
      {searchResults.length > 0 && (
        <div className="suggestions">
          <h3>Suggestions:</h3>
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
