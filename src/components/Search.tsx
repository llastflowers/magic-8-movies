import React from "react";
import "./Search.css";

const Search: React.FC = () => {
  return (
    <div className="search">
      <label htmlFor="movie-search" className="search__label">
        Enter movie title:
      </label>
      <input
        type="text"
        id="movie-search"
        className="search__input"
        // placeholder="..."
      />
      <button className="search__submit-button">Submit</button>
    </div>
  );
};

export default Search;
