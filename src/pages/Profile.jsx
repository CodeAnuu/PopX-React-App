import {
  CameraIcon,
  Cog6ToothIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function Profile() {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Load user data from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("registeredUser")); // Match the key used in Register.jsx
    if (storedUser && storedUser.fullName && storedUser.email) {
      setUser({
        name: storedUser.fullName,
        email: storedUser.email,
      });
    } else {
      setUser({
        name: "Mary Doe",
        email: "mary@example.com",
      });
    }
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-6 pt-24 pb-12">
      <BackgroundAnimation />

      {/* Logo */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-500 to-fuchsia-400 bg-[length:200%_200%] animate-gradient"
      >
        PopX
      </Link>

      {/* Theme Toggle */}
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
        className="absolute top-6 right-6 z-20 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </button>

      {/* Profile Card */}
      <div className="relative z-10 max-w-2xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-12 space-y-10 border border-purple-500 dark:border-purple-700">
        {/* Top: Account Settings Header with floating icon */}
        <div className="relative pb-6 border-b border-purple-400 dark:border-purple-700">
          <h2 className="text-3xl font-bold text-black dark:text-white shadow-[0_4px_20px_rgba(168,85,247,0.6)] dark:shadow-[0_4px_20px_rgba(168,85,247,0.8)] p-4 rounded-md inline-block">
            Account Settings
          </h2>
          <Cog6ToothIcon className="absolute top-4 right-4 w-8 h-8 text-black dark:text-white" />
        </div>

        {/* Avatar & Info */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-purple-500 object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full border-2 border-white dark:border-gray-900">
              <CameraIcon className="h-5 w-5 text-white" />
            </button>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white">
              {user.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <p>
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
            semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
        </div>
      </div>
    </div>
  );
}
