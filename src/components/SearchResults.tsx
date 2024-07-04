import React from "react";
import "./SearchResults.css";
import placeholder from "../assets/poster-placeholder.png";

interface SearchResultsProps {
  results: any[];
}

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200";

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className="search-results">
      {results.length > 0 && (
        <ul>
          {results.map((movie) => (
            <li key={movie.id}>
              <div className="search-results__poster-container">
                <img
                  src={
                    movie.poster_path
                      ? `${BASE_IMAGE_URL}${movie.poster_path}`
                      : placeholder
                  }
                  alt={`${movie.title} poster`}
                  className="search-results__poster"
                />
              </div>
              <p>{movie.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
