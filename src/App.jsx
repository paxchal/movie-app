import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Route for the movie detail page */}
          <Route index element={<Home />} />
          <Route path="/movie/:movie_id" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
