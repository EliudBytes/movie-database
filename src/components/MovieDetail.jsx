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
