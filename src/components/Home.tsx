import React from "react";
import "./Home.css";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <header className="home__header">
        <h1>Magic 8 Movies</h1>
      </header>
      <main className="home__main">
        <p>I love movies!</p>
      </main>
      <footer className="home__footer">
        <p>©2024 Brittany Houtz</p>
      </footer>
    </div>
  );
};

export default HomePage;
