import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-500 flex flex-col items-center justify-center relative
        ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-900"
        }`}
    >
      {/* PopX Text Logo */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-500 to-purple-900 bg-[length:200%_200%] animate-gradient"
      >
        PopX
      </Link>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 p-2 rounded-md bg-transparent focus:outline-none"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <SunIcon className="h-6 w-6 text-yellow-400 drop-shadow-[0_0_6px_rgba(253,224,71,0.8)]" />
        ) : (
          <MoonIcon className="h-6 w-6 text-black drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]" />
        )}
      </button>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 animate-fadeIn drop-shadow-lg">
        🚀 Welcome to <span className="text-purple-600">PopX</span>
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl max-w-md text-center mb-8 animate-fadeIn delay-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      {/* Buttons */}
      <div className="flex gap-6 animate-fadeIn delay-400">
        <Link to="/register">
          <button
            className="bg-purple-600 text-white px-6 py-3 rounded-lg
            transition
            hover:bg-gradient-to-r hover:from-purple-700 hover:via-purple-500 hover:to-purple-900"
          >
            Create Account
          </button>
        </Link>
        <Link to="/login">
          <button
            className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg
            transition
            hover:bg-gradient-to-r hover:from-purple-500 hover:via-purple-400 hover:to-purple-300 hover:text-white"
          >
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
