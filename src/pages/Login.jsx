import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  // toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setError("");

    const userData = {
      name: "User", // Dummy name; update with real user info if available
      email: email.trim(),
    };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Logged in successfully!");
    navigate("/profile");
  };

  return (
    <>
      {/* Animated Gradient Background Styles */}
      <style>{`
        /* Dark mode gradient animation */
        @keyframes darkGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Light mode gradient animation */
        @keyframes lightGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .dark-gradient-bg {
          background: linear-gradient(
            270deg,
            #1a0023,
            #0d0030,
            #000000
          );
          background-size: 600% 600%;
          animation: darkGradient 15s ease infinite;
        }

        .light-gradient-bg {
          background: linear-gradient(
            270deg,
            #e6e6fa,
            #d1c4e9,
            #f0f8ff
          );
          background-size: 600% 600%;
          animation: lightGradient 15s ease infinite;
        }
      `}</style>

      <div
        className={`relative min-h-screen flex items-center justify-center px-4 overflow-hidden
          ${isDarkMode ? "dark-gradient-bg" : "light-gradient-bg"}
        `}
      >
        <BackgroundAnimation />

        {/* PopX Logo with animated gradient */}
        <Link
          to="/"
          className="absolute top-6 left-6 z-20 font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-500 to-fuchsia-400 bg-[length:200%_200%] animate-gradient"
        >
          PopX
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="absolute top-6 right-6 p-2 rounded-md bg-transparent focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-400 drop-shadow-[0_0_6px_rgba(253,224,71,0.8)]" />
          ) : (
            <MoonIcon className="h-6 w-6 text-black drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]" />
          )}
        </button>

        {/* Login Form */}
        <div className="relative z-10 max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6 animate-fadeIn">
          <h2 className="text-3xl font-extrabold text-center text-black dark:text-white">
            <span className="text-black dark:text-white">Sign in to </span>
            <span className="text-purple-600">PopX</span>
          </h2>

          {error && (
            <p className="text-red-500 text-center font-medium">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="text-left">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-800 dark:text-gray-300 hover:text-purple-600 transition-colors"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Enter email address"
              />
            </div>

            <div className="text-left">
              <label
                htmlFor="password"
                className="block text-lg font-semibold text-gray-800 dark:text-gray-300 hover:text-purple-600 transition-colors"
              >
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 pr-10 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-600 dark:text-gray-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M17.94 17.94A10.05 10.05 0 0112 19c-5.52 0-10-7-10-7a19.6 19.6 0 015.8-5.16" />
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8" />
                      <path d="M1 1l22 22" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-700 via-purple-500 to-fuchsia-500 hover:from-purple-600 hover:via-purple-400 hover:to-fuchsia-400 text-white font-extrabold text-lg rounded-xl py-3 shadow-lg transition"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
