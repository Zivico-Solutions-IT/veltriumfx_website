import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const hideNativePasswordStyles = `
  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
    display: none;
  }

  input[type="password"]::-webkit-credentials-auto-fill-button,
  input[type="password"]::-webkit-contacts-auto-fill-button,
  input[type="password"]::-webkit-textfield-decoration-container {
    display: none !important;
    visibility: hidden !important;
  }
`;

const RegisterPage = ({ onLoginClick }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!agree) {
      setError("You must agree to the Terms of service and Privacy policies.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
        country,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        window.location.reload();
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const passwordRules = [
    { label: "Minimum 8 characters", valid: password.length >= 8 },
    { label: "One number", valid: /[0-9]/.test(password) },
    { label: "One uppercase letter", valid: /[A-Z]/.test(password) },
    {
      label: "One special character",
      valid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  return (
    <>
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

        <section className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-lg border border-[#D3D3D3]/25 bg-[#00674F]/85 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl lg:min-h-[620px] lg:grid-cols-[0.5fr_0.5fr]">
          <div className="relative hidden min-h-full overflow-hidden border-r border-[#D3D3D3]/15 lg:block">
            <img
              src="/platform.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,103,79,0.42),rgba(0,103,79,0.18)),radial-gradient(circle_at_52%_44%,rgba(211,211,211,0.22),transparent_30%)]" />
            <div className="absolute left-8 top-8 h-28 w-28 rounded-full border border-[#D3D3D3]/20" />
            <div className="absolute left-20 top-20 h-52 w-52 rounded-full border border-[#D3D3D3]/15" />
            <div className="absolute bottom-8 right-8 max-w-sm rounded-xl border border-[#D3D3D3]/20 bg-[#00674F]/45 p-5 text-white backdrop-blur-md">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D3D3D3]">
                VeltriumFX Account Access
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight">
                Build your trading workspace with confidence.
              </h2>
            </div>
          </div>

          <div className="relative bg-[#00674F]/88 px-5 py-7 text-white sm:px-8 lg:px-9 lg:py-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_10%,rgba(211,211,211,0.14),transparent_28%),radial-gradient(circle_at_100%_70%,rgba(211,211,211,0.12),transparent_36%)]" />

            <div className="relative">
              <h1 className="text-2xl font-extrabold text-white">
                Create account
              </h1>
              <p className="mt-2 text-xs text-white/70">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={onLoginClick}
                  className="font-semibold text-[#D3D3D3] hover:text-white"
                >
                  Login
                </button>
              </p>
            </div>

            <form className="relative mt-7 space-y-3.5 text-left" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold text-white/75">
                    First Name
                  </span>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="h-9 w-full rounded-md border border-[#D3D3D3]/20 bg-white/95 px-3 text-xs text-gray-800 outline-none transition focus:border-[#D3D3D3] focus:ring-2 focus:ring-[#D3D3D3]/25"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold text-white/75">
                    Last Name
                  </span>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="h-9 w-full rounded-md border border-[#D3D3D3]/20 bg-white/95 px-3 text-xs text-gray-800 outline-none transition focus:border-[#D3D3D3] focus:ring-2 focus:ring-[#D3D3D3]/25"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-[11px] font-semibold text-white/75">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="h-9 w-full rounded-md border border-[#D3D3D3]/20 bg-white/95 px-3 text-xs text-gray-800 outline-none transition focus:border-[#D3D3D3] focus:ring-2 focus:ring-[#D3D3D3]/25"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[11px] font-semibold text-white/75">
                  Password
                </span>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="h-9 w-full rounded-md border border-[#D3D3D3]/20 bg-white/95 px-3 pr-10 text-xs text-gray-800 outline-none transition focus:border-[#D3D3D3] focus:ring-2 focus:ring-[#D3D3D3]/25"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-gray-500 hover:text-[#00674F] focus:outline-none"
                    tabIndex="-1"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                  </button>
                </div>

                <div className="mt-2 rounded-md border border-[#D3D3D3]/15 bg-[#00674F]/30 p-2">
                  <p className="text-[11px] font-semibold text-white/70">
                    Password must contain:
                  </p>
                  <div className="mt-1 grid grid-cols-1 gap-y-1 text-[11px] sm:grid-cols-2 sm:gap-x-3">
                    {passwordRules.map((rule) => (
                      <div
                        key={rule.label}
                        className={`flex items-center gap-1.5 ${
                          rule.valid ? "text-[#D3D3D3]" : "text-white/45"
                        }`}
                      >
                        <span>{rule.valid ? "✓" : "○"}</span>
                        <span>{rule.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[11px] font-semibold text-white/75">
                  Country
                </span>
                <input
                  type="text"
                  placeholder="Country"
                  className="h-9 w-full rounded-md border border-[#D3D3D3]/20 bg-white/95 px-3 text-xs text-gray-800 outline-none transition focus:border-[#D3D3D3] focus:ring-2 focus:ring-[#D3D3D3]/25"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  required
                />
              </label>

              <label className="flex items-start gap-2 text-xs leading-relaxed text-white/65">
                <input
                  type="checkbox"
                  className="mt-1 accent-[#D3D3D3]"
                  checked={agree}
                  onChange={(event) => setAgree(event.target.checked)}
                />
                <span>
                  I agree to the{" "}
                  <span className="font-medium text-[#D3D3D3]">Terms of service</span>{" "}
                  and Privacy policies
                </span>
              </label>

              {error && (
                <div className="mb-2 rounded-md border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs text-red-200">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="h-10 w-full rounded-md bg-[#D3D3D3] text-xs font-bold uppercase tracking-[0.08em] text-[#00674F] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>

            <p className="relative mt-6 border-t border-[#D3D3D3]/15 pt-5 text-sm text-white/65">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onLoginClick}
                className="font-semibold text-[#D3D3D3] hover:text-white"
              >
                Login
              </button>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default RegisterPage;
