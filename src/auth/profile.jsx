import { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }
      try {
        const res = await axios.get("http://localhost:5001/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (err) {
        setError("Session expired. Please log in again.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setTimeout(() => (window.location.href = "/login"), 2000);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-gray-500 text-sm animate-pulse">Loading your profile...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-red-500 text-sm">{error}</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            My <span className="text-green-700">Profile</span>
          </h1>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition"
          >
            Logout
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
          {/* Avatar + Name */}
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-800 text-2xl font-bold select-none">
              {user?.firstName?.[0]?.toUpperCase()}{user?.lastName?.[0]?.toUpperCase()}
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {user?.firstName} {user?.lastName}
              </p>
              <span className="inline-block mt-1 rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-800 capitalize">
                {user?.role || "user"}
              </span>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Info Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProfileField label="First Name" value={user?.firstName} />
            <ProfileField label="Last Name" value={user?.lastName} />
            <ProfileField label="Email" value={user?.email} />
            <ProfileField label="Country" value={user?.country || "—"} />
            <ProfileField label="Phone" value={user?.phone || "—"} />
            <ProfileField label="Member Since" value={
              user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: "numeric", month: "long", day: "numeric",
                  })
                : "—"
            } />
          </div>
        </div>
      </div>
    </main>
  );
};

const ProfileField = ({ label, value }) => (
  <div className="rounded-lg bg-gray-50 px-4 py-3">
    <p className="text-xs font-medium text-gray-500 mb-0.5">{label}</p>
    <p className="text-sm font-medium text-gray-800 break-all">{value}</p>
  </div>
);
export default ProfilePage;



