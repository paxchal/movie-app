import React from "react";
import Movie from "./Movie";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MenuBar />
      <Movie />
      <Footer />
    </div>
  );
}

export default App;
