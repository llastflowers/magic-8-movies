import React from "react";
import "./Recommendations.css";
import placeholder from "../assets/poster-placeholder.png";

interface RecommendationsProps {
  recommendations: any[];
  onBack: () => void;
  onNewSearch: () => void;
}

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200";

const Recommendations: React.FC<RecommendationsProps> = ({
  recommendations,
  onBack,
  onNewSearch,
}) => {
  return (
    <div className="recommendations">
      <button onClick={onBack} className="recommendations__back-button">
        ⟪⟪ Back to Results
      </button>
      <button
        onClick={onNewSearch}
        className="recommendations__new-search-button"
      >
        New Search
      </button>

      <h2>
        Here are your recommendations! Make a selection for more information.
      </h2>
      {recommendations.length > 0 && (
        <ul>
          {recommendations.map((movie) => (
            <li
              key={movie.id}
              onClick={() =>
                window.open(
                  `https://www.themoviedb.org/movie/${movie.id}`,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <div className="recommendations__poster-container">
                <img
                  src={
                    movie.poster_path
                      ? `${BASE_IMAGE_URL}${movie.poster_path}`
                      : placeholder
                  }
                  alt={`${movie.title} poster`}
                  className="recommendations__poster"
                />
              </div>
              <div className="recommendations__info">
                <span className="recommendations__title">{movie.title}</span>
                <span> | {movie.release_date.substring(0, 4)}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recommendations;
