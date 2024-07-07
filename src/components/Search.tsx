import React, { useState } from "react";
import { searchMovies, getRecommendations } from "../tmdbApi";
import SearchResults from "./SearchResults";
import Recommendations from "./Recommendations";
import "./Search.css";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      const data = await searchMovies(query);
      setResults(data.results);
      setSearchSubmitted(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(query);
  };

  const handleMovieSelect = async (movieId: number) => {
    try {
      const data = await getRecommendations(movieId);
      const topRecommendations = data.results.slice(0, 8);
      setRecommendations(topRecommendations);
      setShowRecommendations(true);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  const handleBackToSearch = () => {
    setShowRecommendations(false);
    setRecommendations([]);
  };

  const handleNewSearch = () => {
    setQuery("");
    setResults([]);
    setRecommendations([]);
    setShowRecommendations(false);
    setSearchSubmitted(false);
  };

  return (
    <div className="search">
      {!showRecommendations ? (
        <>
          <div className="search__blurb">
            <p>
              Use the search box below to find movie recommendations based on a
              movie you love.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="movie-search" className="search__label">
              Enter movie title:
            </label>
            <input
              type="search"
              id="movie-search"
              className="search__input"
              value={query}
              onChange={handleChange}
            />
            <button type="submit" className="search__submit-button">
              Submit
            </button>
          </form>
          {searchSubmitted && (
            <>
              <SearchResults
                results={results}
                onMovieSelect={handleMovieSelect}
              />
            </>
          )}
        </>
      ) : (
        <Recommendations
          recommendations={recommendations}
          onBack={handleBackToSearch}
          onNewSearch={handleNewSearch}
        />
      )}
    </div>
  );
};

export default Search;
