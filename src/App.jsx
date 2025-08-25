import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Set the browser tab title
  useEffect(() => {
    document.title = "Movie Database App";
  }, []);

  // Search for multiple movies
  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setSelectedMovieID(null);
    setSearchResults([]);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=29652ce9`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setSearchResults(data.Search);
      } else {
        setError("No movies found. Try a different title.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Select a movie by its IMDb ID
  const handleMovieClick = (imdbID) => {
    setSelectedMovieID(imdbID);
    setSearchResults([]); // hide search results
  };

  // Back button handler
  const handleBack = () => {
    setSelectedMovieID(null);
    setError("");
  };

  return (
    <div className="bg-black text-white p-4 flex flex-col min-h-screen">
      <h1 className="text-4xl font-bold text-center pt-4">Movie Database</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center mt-6">Loading...</p>}
      {error && <p className="text-center mt-6 text-red-500">{error}</p>}

      {/* Movie List */}
      {!selectedMovieID && searchResults.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6 flex-1">
          {searchResults.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onSelect={handleMovieClick}
            />
          ))}
        </div>
      )}

      {/* Movie Details */}
      {selectedMovieID && (
        <MovieDetail imdbID={selectedMovieID} onBack={handleBack} />
      )}

      {/* Footer */}
      <footer className="text-center mt-auto py-4 text-white">
        Developed by Eliud Mathu
      </footer>
    </div>
  );
}

export default App;


