import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResult, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="bg-black/70 text-white">
      <div>
        {movieNames.map((movieName,index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
