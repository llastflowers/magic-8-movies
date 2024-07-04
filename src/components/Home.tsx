import React from "react";
import "./Home.css";
import logo from "../assets/m8m-logo-lt-nt.png";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <header className="home__header">
        <h1>MAGIC 8 MOVIES</h1>
        <img src={logo} alt="Magic 8 Movies Logo" className="home__logo"></img>
      </header>
      <main className="home__main">
        <div className="home__blurb">
          <p>
            Use the search box below to find movie recommendations based on a
            movie you love.
          </p>
        </div>
        <div className="home__search">
          <label htmlFor="movie-search" className="home__search-label">
            Enter movie title:
          </label>
          <input
            type="text"
            id="movie-search"
            className="home__search-box"
            // placeholder="..."
          />
          <button className="home__submit-button">Submit</button>
        </div>
      </main>
      <footer className="home__footer">
        <p>©2024 Brittany Houtz</p>
      </footer>
    </div>
  );
};

export default HomePage;
