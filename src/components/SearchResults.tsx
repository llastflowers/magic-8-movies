import React from "react";
import MovieList from "./MovieList";
import "./SearchResults.css";

interface SearchResultsProps {
  results: any[];
  onMovieSelect: (movieId: number) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  onMovieSelect,
}) => {
  return (
    <div className="search-results">
      <h2>Confirm your selection below:</h2>
      {results.length > 0 && (
        <MovieList movies={results} onMovieSelect={onMovieSelect} />
      )}
    </div>
  );
};

export default SearchResults;
