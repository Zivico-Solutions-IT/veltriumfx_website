import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
      
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#D3D3D3] px-4 py-8 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img
            src="/platform.png"
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(211,211,211,0.18),transparent_26%),radial-gradient(circle_at_72%_46%,rgba(211,211,211,0.32),transparent_28%),linear-gradient(135deg,rgba(211,211,211,0.96),rgba(211,211,211,0.78),rgba(211,211,211,0.96))]" />
        </div>

        <section className="relative z-10 grid w-full max-w-6xl overflow-hidden rounded-lg border border-[#D3D3D3]/25 bg-[#00674F]/85 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl lg:min-h-[640px] lg:grid-cols-[0.53fr_0.47fr]">
          <div className="relative border-r border-[#D3D3D3]/15 bg-[#00674F]/88 px-5 py-8 text-white sm:px-9 lg:px-12 lg:py-11">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_10%,rgba(211,211,211,0.14),transparent_28%),radial-gradient(circle_at_0%_70%,rgba(0,103,79,0.26),transparent_36%)]" />

          <div className="relative mx-auto w-full max-w-lg">
            <h1 className="text-2xl font-extrabold text-white">
              Sign in
            </h1>
            <p className="mt-2 text-xs text-white/60">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onSignUpClick}
                className="font-semibold text-[#D3D3D3] hover:text-white"
              >
                Create now
              </button>
            </p>
          </div>

          <form
            className="relative mx-auto mt-7 w-full max-w-lg space-y-3.5 text-left"
            onSubmit={handleSubmit}
          >
            {/* Email Field */}
            <label className="block">
              <span className="mb-1.5 block text-[11px] font-semibold text-white/70">
                Email
              </span>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="h-10 w-full rounded-md border border-white/15 bg-white/95 px-3.5 text-xs text-gray-800 outline-none transition focus:border-[#D3D3D3] focus:ring-2 focus:ring-[#D3D3D3]/25"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            {/* Password Field - REVERSE logic: showPassword true = FaEye, false = FaEyeSlash */}
            <label className="block">
              <span className="mb-1.5 block text-[11px] font-semibold text-white/70">
                Password
              </span>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="****"
                  className="h-10 w-full rounded-md border border-white/15 bg-white/95 px-3.5 pr-10 text-xs text-gray-800 outline-none transition focus:border-[#D3D3D3] focus:ring-2 focus:ring-[#D3D3D3]/25"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* SINGLE toggle button with REVERSE icon logic */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-md p-1 text-gray-500 transition-colors hover:text-[#00674F] focus:outline-none"
                  aria-label={showPassword ? "Show password" : "Hide password"}
                >
                  {/* REVERSE: When password is visible (showPassword = true): show open eye (FaEye) */}
                  {/* When password is hidden (showPassword = false): show slashed eye (FaEyeSlash) */}
                  {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </button>
              </div>
            </label>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between gap-3 text-sm text-white/70">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#00674F]" />
                Remember me
              </label>
              <a href="#" className="font-medium text-[#D3D3D3] hover:text-white">
                Forgot password?
              </a>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-2 rounded-md border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs text-red-200">{error}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 h-10 w-full rounded-md bg-[#D3D3D3] text-xs font-bold uppercase tracking-[0.08em] text-[#00674F] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Footer Link */}
          <p className="relative mx-auto mt-6 w-full max-w-lg border-t border-[#D3D3D3]/15 pt-5 text-sm text-white/65">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={onSignUpClick}
              className="font-semibold text-[#D3D3D3] hover:text-white"
            >
              Sign up
            </button>
          </p>
          </div>

          <div className="relative hidden min-h-[640px] overflow-hidden lg:block">
            <img
              src="/platform.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,103,79,0.32),rgba(4,18,14,0.18)),radial-gradient(circle_at_52%_44%,rgba(211,211,211,0.22),transparent_30%)]" />
            <div className="absolute left-8 top-8 h-28 w-28 rounded-full border border-[#D3D3D3]/20" />
            <div className="absolute left-20 top-20 h-52 w-52 rounded-full border border-[#00674F]/25" />
            <div className="absolute bottom-8 right-8 max-w-sm rounded-xl border border-[#D3D3D3]/20 bg-[#00674F]/45 p-5 text-white backdrop-blur-md">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D3D3D3]">
                VeltriumFX Trading Access
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight">
                Secure access to your trading workspace.
              </h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
