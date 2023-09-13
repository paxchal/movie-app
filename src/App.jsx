import React from "react";
import Movie from "./Movie";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Movie />

        <Routes>
          {/* Route for the movie detail page */}
          <Route path="/movie/:movie_id" element={<MovieDetails />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
