import React, { useState } from "react";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail"; // matches your file name

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="bg-black min-h-screen text-white p-4">
      <h1 className="text-3xl text-center font-bold mb-6">🎬 Movie Database</h1>
      {!selectedMovie ? (
        <Home onSelectMovie={(id) => setSelectedMovie(id)} />
      ) : (
        <MovieDetail imdbID={selectedMovie} onBack={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}


