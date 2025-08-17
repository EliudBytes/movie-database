import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query) return;

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
        🎬 Movie Database App
      </h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-700"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p className="text-gray-700 dark:text-gray-300">
            No movies found. Try searching!
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;


