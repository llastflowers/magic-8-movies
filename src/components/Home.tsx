import React from "react";
import "./Home.css";
import logo from "../assets/m8m-logo-lt-nt.png";
import Search from "./Search";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <header className="home__header">
        <h1>MAGIC 8 MOVIES</h1>
        <img src={logo} alt="Magic 8 Movies Logo" className="home__logo"></img>
      </header>
      <main className="home__main">
        <Search />
      </main>
      <footer className="home__footer">
        <p>©2024 Brittany Houtz</p>
      </footer>
    </div>
  );
};

export default HomePage;
