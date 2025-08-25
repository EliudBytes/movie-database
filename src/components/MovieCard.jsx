import React from "react";
<<<<<<< HEAD

function MovieCard({ movie, onSelect }) {
  return (
    <div
      className="bg-gray-900 rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transform transition duration-200"
      onClick={() => onSelect(movie.imdbID)}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
        alt={movie.Title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{movie.Title}</h2>
        <p className="text-gray-400">{movie.Year}</p>
      </div>
    </div>
=======
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
>>>>>>> 6b103e86a9f0d1ae6d446ab6ae88b3009270a323
  );
}

export default MovieCard;

<<<<<<< HEAD
=======

>>>>>>> 6b103e86a9f0d1ae6d446ab6ae88b3009270a323
