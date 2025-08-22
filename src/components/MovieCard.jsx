import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="block">
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-72 object-cover rounded"
        />
        <h3 className="mt-2 text-lg font-semibold">{movie.Title}</h3>
        <p className="text-gray-500">{movie.Year}</p>
      </div>
    </Link>
  );
}

export default MovieCard;


