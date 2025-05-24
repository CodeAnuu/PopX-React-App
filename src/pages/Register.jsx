import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundAnimation from "../components/BackgroundAnimation";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: null,
  });

  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(saved === "true");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  //const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, phone, email, password, isAgency } = formData;
    const isValid =
      fullName &&
      phone &&
      email &&
      password &&
      (isAgency === true || isAgency === false);
    if (!isValid) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    localStorage.setItem("registeredUser", JSON.stringify(formData));
    alert("Registered successfully!");
    navigate("/profile");
  };

  return (
    <>
      {/* Animated Gradient Background Styles */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .dark-gradient-bg {
          background: linear-gradient(270deg, #1a0023, #0d0030, #000000, #1a0023);
          background-size: 600% 600%;
          animation: gradientShift 15s ease infinite;
        }
        .light-gradient-bg {
          background: linear-gradient(270deg, #e6e6fa, #d1c4e9, #f0f8ff, #e6e6fa);
          background-size: 600% 600%;
          animation: gradientShift 15s ease infinite;
        }
      `}</style>

      <div
        className={`relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden
          ${darkMode ? "dark-gradient-bg" : "light-gradient-bg"}`}
      >
        {/* Particle/Custom Background Animation */}
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

        {/* Form Box */}
        <div className="relative z-10 max-w-md w-full bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-12 space-y-10 border border-purple-400 dark:border-purple-700">
          <h2 className="text-3xl font-bold text-left leading-tight">
            <span className="text-black dark:text-white">Create your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-500 to-fuchsia-400 bg-[length:200%_200%] animate-gradient font-extrabold">
              PopX
            </span>
            <span className="text-black dark:text-white"> Account</span>
          </h2>

          {error && (
            <p className="text-red-500 text-center font-medium">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              {
                id: "fullName",
                label: "Full Name",
                type: "text",
                required: true,
                placeholder: "Mary Doe",
              },
              {
                id: "phone",
                label: "Phone Number",
                type: "tel",
                required: true,
                placeholder: "Mary Doe",
              },
              {
                id: "email",
                label: "Email Address",
                type: "email",
                required: true,
                placeholder: "Mary Doe",
              },
              {
                id: "companyName",
                label: "Company Name",
                type: "text",
                required: false,
                placeholder: "Mary Doe",
              },
            ].map(({ id, label, type, required, placeholder }) => (
              <div key={id}>
                <label
                  htmlFor={id}
                  className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition"
                >
                  {label} {required && <span className="text-red-500">*</span>}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  required={required}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            ))}

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Mary Doe"
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-3 pr-12 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
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

            {/* Agency Question */}
            <div>
              <p className="mb-4 text-base font-semibold text-gray-700 dark:text-gray-300">
                Are you an Agency? <span className="text-red-500">*</span>
              </p>
              <div className="flex space-x-6">
                {["yes", "no"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        isAgency: option === "yes",
                      }))
                    }
                    className={`px-5 py-2 rounded-full border font-semibold text-sm transition
                      ${
                        formData.isAgency === (option === "yes")
                          ? "bg-purple-600 text-white border-purple-600 shadow-lg"
                          : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400"
                      }`}
                  >
                    {option.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-700 via-purple-500 to-fuchsia-500 hover:from-purple-600 hover:via-purple-400 hover:to-fuchsia-400 text-white font-extrabold text-lg rounded-xl py-3 shadow-lg transition"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
