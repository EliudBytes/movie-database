import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          {movie.Title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
