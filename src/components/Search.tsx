import React, { useState } from "react";
import { searchMovies } from "../tmdbApi";
import SearchResults from "./SearchResults";
import "./Search.css";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const data = await searchMovies(query);
      setResults(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    console.log("Searched for:", query);
    console.log("Search results:", results);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie-search" className="search__label">
          Enter movie title:
        </label>
        <input
          type="text"
          id="movie-search"
          className="search__input"
          value={query}
          onChange={handleChange}
          placeholder="Enter a movie title..."
        />
        <button type="submit" className="search__submit-button">
          Submit
        </button>
      </form>
      <SearchResults results={results} />
    </div>
  );
};

export default Search;
