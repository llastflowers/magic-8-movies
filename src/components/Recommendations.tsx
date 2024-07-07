import React from "react";
import MovieList from "./MovieList";
import "./Recommendations.css";

interface RecommendationsProps {
  recommendations: any[];
  onBack: () => void;
  onNewSearch: () => void;
}

const Recommendations: React.FC<RecommendationsProps> = ({
  recommendations,
  onBack,
  onNewSearch,
}) => {
  return (
    <div className="recommendations">
      <button
        onClick={onBack}
        className="recommendations__button recommendations__back-button"
      >
        ⟪⟪ Back to Results
      </button>
      <button
        onClick={onNewSearch}
        className="recommendations__button recommendations__new-search-button"
      >
        New Search
      </button>
      <h2>
        Here are your recommendations! Make a selection for more information.
      </h2>
      {recommendations.length > 0 && (
        <MovieList movies={recommendations} isRecommendation={true} />
      )}
    </div>
  );
};

export default Recommendations;
