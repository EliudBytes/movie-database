import React, { useEffect, useState } from "react";

function MovieDetail({ imdbID, onBack }) {
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

  if (loading) return <p className="text-center mt-6">Loading movie details...</p>;
  if (error) return <p className="text-red-500 text-center mt-6">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto mt-6 bg-gray-900 rounded-lg overflow-hidden shadow-lg p-4">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        ← Back to Search
      </button>

      {movie && (
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
            alt={movie.Title}
            className="w-full md:w-1/3 rounded"
          />
          <div className="text-white flex-1">
            <h2 className="text-3xl font-bold mb-2">{movie.Title} ({movie.Year})</h2>
            <p className="mb-2"><strong>Genre:</strong> {movie.Genre}</p>
            <p className="mb-2"><strong>Actors:</strong> {movie.Actors}</p>
            <p className="mb-2"><strong>Director:</strong> {movie.Director}</p>
            <p className="mb-2"><strong>Runtime:</strong> {movie.Runtime}</p>
            <p className="mb-4"><strong>Plot:</strong> {movie.Plot}</p>
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
      )}
    </div>
  );
}

export default MovieDetail;

