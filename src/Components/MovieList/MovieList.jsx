import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie,index) => (
        <MovieCard
          key={index}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </>
  );
};

export default MovieList;
