import { useState } from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import axios from "axios";

// Add this style to hide browser's native password visibility toggle
const hideNativePasswordStyles = `
  /* Hide Edge/IE native password reveal button */
  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
    display: none;
  }
  
  /* Hide Chrome/Safari/Webkit native password toggle */
  input[type="password"]::-webkit-credentials-auto-fill-button,
  input[type="password"]::-webkit-contacts-auto-fill-button,
  input[type="password"]::-webkit-textfield-decoration-container {
    display: none !important;
    visibility: hidden !important;
  }
  
  /* For Chrome's password manager eye icon */
  input[type="password"]::-webkit-outer-spin-button,
  input[type="password"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const LoginPage = ({ onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        // Optionally redirect or update UI here
        window.location.reload();
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Inject styles to hide native browser password toggle */}
      <style>{hideNativePasswordStyles}</style>
      
      <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
        <section className="auth-card interactive-card relative w-full max-w-md rounded-2xl bg-white px-6 py-8 text-center shadow-xl sm:px-8">
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-xl bg-white px-3 py-2 shadow-md">
            <img src={logo} alt="NOVAFX Logo" className="h-9 object-contain" />
          </div>

          <div className="mt-5">
            <h1 className="text-2xl font-semibold text-gray-900">
              Hello,
              <br />
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Login to continue to your account
            </p>
          </div>

          <form
            className="mt-7 space-y-4 text-left"
            onSubmit={handleSubmit}
          >
            {/* Email Field */}
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-gray-600">
                Email
              </span>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            {/* Password Field - REVERSE logic: showPassword true = FaEye, false = FaEyeSlash */}
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-gray-600">
                Password
              </span>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="****"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-sm text-gray-700 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* SINGLE toggle button with REVERSE icon logic */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 flex items-center justify-center p-1 rounded-md focus:outline-none transition-colors z-10"
                  aria-label={showPassword ? "Show password" : "Hide password"}
                >
                  {/* REVERSE: When password is visible (showPassword = true): show open eye (FaEye) */}
                  {/* When password is hidden (showPassword = false): show slashed eye (FaEyeSlash) */}
                  {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </button>
              </div>
            </label>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between gap-3 text-sm text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-green-700" />
                Remember me
              </label>
              <a href="#" className="font-medium text-green-700 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-600 text-xs mb-2">{error}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="button-shine w-full rounded-lg bg-[#014421] py-2.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg active:translate-y-0"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-xs font-medium text-gray-500">or</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          {/* OAuth Social Buttons */}
          <div className="flex justify-center gap-5">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f8f8] shadow-md hover:shadow-lg">
                <FcGoogle size={22} />
              </div>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md">
                <FaFacebookF size={18} />
              </div>
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-md">
                <FaXTwitter size={18} />
              </div>
            </a>
          </div>

          {/* Footer Link */}
          <p className="mt-6 text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={onSignUpClick}
              className="font-semibold text-[#014421] hover:text-[#014421]"
            >
              Sign up
            </button>
          </p>
        </section>
      </main>
    </>
  );
};

export default LoginPage;