import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (query.trim() !== "") onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="p-2 rounded-l-lg w-2/3 md:w-1/3 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
      />
      <button
        type="submit"
        className="p-2 bg-red-600 rounded-r-lg hover:bg-red-700 transition"
=======
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-4">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-2/3 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
>>>>>>> 6b103e86a9f0d1ae6d446ab6ae88b3009270a323
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;

<<<<<<< HEAD





=======
>>>>>>> 6b103e86a9f0d1ae6d446ab6ae88b3009270a323
