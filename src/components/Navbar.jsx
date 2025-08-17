import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 dark:bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">🎬 Movie Database</h1>
        <ul className="flex space-x-4 text-white">
          <li><a href="#" className="hover:text-gray-200">Home</a></li>
          <li><a href="#" className="hover:text-gray-200">Movies</a></li>
          <li><a href="#" className="hover:text-gray-200">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
