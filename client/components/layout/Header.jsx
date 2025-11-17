import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthModal from "../Auth/AuthModel";
import { getCurrentUser, logout } from "../../services/api";

const Header = () => {
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogin = () => {
    setAuthMode("login");
    setShowAuthModal(true);
  };

  const handleSignup = () => {
    setAuthMode("signup");
    setShowAuthModal(true);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/");
    alert("Logged out successfully!");
  };

  const handleCloseModal = () => {
    setShowAuthModal(false);
    const currentUser = getCurrentUser();
    if (currentUser) {
      console.log(currentUser);
      setUser(currentUser);
    }
  };

  return (
    <>
      <header className="h-16 bg-[#1E293B] border-b border-[#334155]">
        <div className="flex items-center justify-between h-full w-[90%] mx-auto">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 text-xl font-bold text-white hover:text-gray-300 cursor-pointer">
            <div className="h-8 w-8 rounded flex items-center justify-center bg-[#10B981]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>
            </div>
            <a href="/" className="no-underline text-white">DevConnect</a>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center justify-between h-full w-64">
            <a href="/" className="text-[#94A3B8] hover:text-[#F1F5F9] no-underline transition">
              Home
            </a>
            <a href="/discussions" className="text-[#94A3B8] hover:text-[#F1F5F9] no-underline transition">
              Posts
            </a>
            <a href="/about" className="text-[#94A3B8] hover:text-[#F1F5F9] no-underline transition">
              About
            </a>
            <a href="/blog" className="text-[#94A3B8] hover:text-[#F1F5F9] no-underline transition">
              Blog
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center justify-between h-full w-52">
            {user ? (
              // User is logged in
              <>
                {/* Bell Icon */}
                <div className="h-10 w-10 flex items-center justify-center text-[#94A3B8] hover:bg-[#334155] hover:text-[#F1F5F9] rounded cursor-pointer transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                  </svg>
                </div>

                {/* New Post Button */}
                <div
                  onClick={() => navigate("/create-post")}
                  className="px-4 py-2 mx-2  text-center bg-[#10B981] hover:bg-[#059669] text-white rounded-md cursor-pointer transition"
                >
                  Post
                </div>

                {/* User Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-transparent border border-[#334155] hover:border-[#3B82F6] rounded-lg cursor-pointer transition">
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-[#F1F5F9] text-sm font-medium">
                      {user.fullName}
                    </span>
                  </button>

                  {/* Dropdown Menu */}
                  <div className="hidden group-hover:block absolute top-full right-0  bg-[#1E293B] border border-[#334155] rounded-lg p-2 min-w-[180px] shadow-2xl z-50">
                    <a href={`/profile/${user.id}`}
                      className="block w-full px-3 py-2.5 bg-transparent border-0 text-[#F1F5F9] text-left cursor-pointer rounded hover:bg-[#334155] text-sm no-underline transition"
                    >
                      Profile
                    </a>
                    <a
                      href="/settings"
                      className="block w-full px-3 py-2.5 bg-transparent border-0 text-[#F1F5F9] text-left cursor-pointer rounded hover:bg-[#334155] text-sm no-underline transition"
                    >
                      Settings
                    </a>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-3 py-2.5 bg-transparent border-0 border-t border-[#334155] text-[#EF4444] text-left cursor-pointer rounded hover:bg-[#334155] text-sm mt-1 pt-3 transition"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // User is NOT logged in
              <>
                <button
                  onClick={handleLogin}
                  className="px-5 py-2 border border-[#334155] bg-transparent text-[#F1F5F9] rounded-md cursor-pointer text-sm hover:bg-[#1E293B] hover:border-[#475569] transition"
                >
                  Login
                </button>
                <button
                  onClick={handleSignup}
                  className="px-5 py-2 border border-[#3B82F6] bg-[#3B82F6] text-white rounded-md cursor-pointer text-sm hover:bg-[#2563EB] transition"
                >
                  Sign Up
                </button>
               
              </>
            )}
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={handleCloseModal}
        initialMode={authMode}
      />
    </>
  );
};

export default Header;