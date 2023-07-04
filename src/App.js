import React from "react";

import "./App.css";
import Navbar from "./component/Navbar";
// import Main from "./component/Main";
// import SearchBar from "./component/SearchBar";
// import MovieSection from "./component/MovieSection";
// import EventSection from "./component/EventSection";
import MovieDetails from "./component/MovieDetails";

function App() {
  return (
    <>
      <div className="header-section">
        <Navbar />
      </div>
      <div className="main-section">
        {/* <Main />
        <SearchBar />
        <MovieSection />
        <EventSection />
        <SearchBar /> */}
        <MovieDetails />
      </div>
    </>
  );
}

export default App;
