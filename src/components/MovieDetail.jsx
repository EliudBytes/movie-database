<<<<<<< HEAD
import React from "react";

function MovieDetail({ movie, onBack }) {
  return (
    <div className="max-w-4xl mx-auto mt-6 bg-gray-900 rounded-lg overflow-hidden shadow-lg p-4">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        ← Back to Search
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Movie Poster */}
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded"
        />

        {/* Movie Info */}
        <div className="text-white flex-1">
          <h2 className="text-3xl font-bold mb-2">{movie.Title} ({movie.Year})</h2>
          <p className="mb-2"><span className="font-semibold">Genre:</span> {movie.Genre}</p>
          <p className="mb-2"><span className="font-semibold">Actors:</span> {movie.Actors}</p>
          <p className="mb-2"><span className="font-semibold">Director:</span> {movie.Director}</p>
          <p className="mb-4"><span className="font-semibold">Plot:</span> {movie.Plot}</p>

          {/* Ratings */}
          {movie.Ratings && movie.Ratings.length > 0 && (
            <div>
              <h3 className="font-semibold mb-1">Ratings:</h3>
              <ul className="list-disc list-inside">
                {movie.Ratings.map((rating, index) => (
                  <li key={index}>
                    {rating.Source}: {rating.Value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;


=======
// src/components/MovieDetail.jsx
import React, { useEffect, useState } from "react";

export default function MovieDetail({ imdbID, onBack }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=29652ce9&i=${imdbID}&plot=full`
        );
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [imdbID]);

  if (loading) return <p className="text-center">Loading movie details...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
      <button
        onClick={onBack}
        className="mb-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        🔙 Back
      </button>

      {movie && (
        <>
          <h2 className="text-2xl font-bold mb-4">{movie.Title}</h2>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
            alt={movie.Title}
            className="w-64 mb-4 mx-auto"
          />
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
        </>
      )}
    </div>
  );
}
>>>>>>> 6b103e86a9f0d1ae6d446ab6ae88b3009270a323
