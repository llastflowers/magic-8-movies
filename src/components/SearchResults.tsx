import React from "react";
import "./SearchResults.css";
import placeholder from "../assets/poster-placeholder.png";
import { getRecommendations } from "../tmdbApi";

interface SearchResultsProps {
  results: any[];
}

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200";

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const handleRecommendations = async (movieId: number) => {
    try {
      const data = await getRecommendations(movieId);
      const topRecommendations = data.results.slice(0, 8);
      console.log("Top 8 Recommendations:", topRecommendations);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div className="search-results">
      {results.length > 0 && (
        <ul>
          {results.map((movie) => (
            <li key={movie.id} onClick={() => handleRecommendations(movie.id)}>
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
              <div className="search-results__info">
                <span className="search-results__title">{movie.title}</span>
                <span> | {movie.release_date.substring(0, 4)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
