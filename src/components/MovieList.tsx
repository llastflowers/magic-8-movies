import React from "react";
import placeholder from "../assets/images/poster-placeholder.png";
import "./MovieList.css";

interface MovieListProps {
  movies: any[];
  onMovieSelect?: (movieId: number) => void;
  isRecommendation?: boolean;
}

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200";

const MovieList: React.FC<MovieListProps> = ({
  movies,
  onMovieSelect,
  isRecommendation = false,
}) => {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li
          key={movie.id}
          onClick={() =>
            isRecommendation
              ? window.open(
                  `https://www.themoviedb.org/movie/${movie.id}`,
                  "_blank",
                  "noopener,noreferrer"
                )
              : onMovieSelect && onMovieSelect(movie.id)
          }
        >
          <div className="movie-list__poster-container">
            <img
              src={
                movie.poster_path
                  ? `${BASE_IMAGE_URL}${movie.poster_path}`
                  : placeholder
              }
              alt={`${movie.title} poster`}
              className="movie-list__poster"
            />
          </div>
          <div className="movie-list__info">
            <span className="movie-list__title">{movie.title}</span>
            <span> | {movie.release_date.substring(0, 4)}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
