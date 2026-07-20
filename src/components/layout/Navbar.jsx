// src/components/layout/Navbar.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png"; // adjust path if needed

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── Route map: dropdown option → path ──────────────────────────────────────
  // Add new pages here. Options not listed here do nothing when clicked.
  const optionRoutes = {
    // Home dropdown
    Platform: "/platform",
    "Account Type": "/account-type",
    "Deposits & Withdrawals": "/deposit",
    Promotions: "/promotions",
    
    // Market dropdown
    Indices: "/indices",
    Crypto: "/crypto",
    Stocks: "/stocks",
    Forex: "/forex",
    Commodities: "/markets/commodities",
    // Trading Tool dropdown
    "Economic Calender": "/economic-calendar",
    "Automated Trading": "/tools/automated-trading",
    // Partners dropdown
    "Introducing Brokers": "/partners",
    // About Us dropdown
    "Why Us": "/why-us",
    
    "FAQ's": "/faq",
    "Contact Us": "/contact",
    // Register Now dropdown
    // "Open Live Account": "/signup",
    // "Demo Account": "/signup",
    // "Islamic Account": "/signup",
  };

  // ─── Dropdown structure ──────────────────────────────────────────────────────
  const dropdownContent = {
    Home: [
      "Platform",
      "Account Type",
      "Deposits & Withdrawals",
      "Promotions"
    ],
    Market: ["Indices", "Crypto", "Stocks", "Forex", "Commodities"],
    "Trading Tool": ["Economic Calender", "Automated Trading"],
    Partners: ["Introducing Brokers"],
    "About Us": ["Why Us", "FAQ's", "Contact Us"],
    // "Register Now": ["Open Live Account", "Demo Account", "Islamic Account"],
  };

  const menuItems = Object.keys(dropdownContent);

  const isMenuActive = (item) => {
    if (item === "Home") {
      return location.pathname === "/";
    }

    return dropdownContent[item].some(
      (option) => optionRoutes[option] === location.pathname
    );
  };

  // ─── Helpers ─────────────────────────────────────────────────────────────────
  const goHome = () => {
    navigate("/");
    closeMobileMenu();
    requestAnimationFrame(() => {
      document
        .getElementById("hero")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (item) => {
    setOpenMobileDropdown((prev) => (prev === item ? null : item));
  };

  const scrollPageTop = () => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  };

  const handleDropdownOptionClick = (option) => {
    const route = optionRoutes[option];
    if (route) {
      navigate(route);
      scrollPageTop();
    }
    setHoveredMenu(null);
    closeMobileMenu();
  };

  // ─── Render ──────────────────────────────────────────────────────────────────
  return (
    <header
      className={`sticky top-0 z-50 px-4 sm:px-6 lg:px-8 relative transition-all duration-500 ${
        isScrolled
          ? "bg-transparent py-2"
          : "bg-gray-100/95 py-4 shadow-sm backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between transition-all duration-500 ${
          isScrolled
            ? "nav-float-in rounded-full bg-white px-3 py-2 shadow-[0_16px_40px_rgba(1,68,33,0.16)]"
            : ""
        }`}
      >

        {/* ── Logo ──────────────────────────────────────────────────────────── */}
        <button
          type="button"
          className="flex items-center transition-all duration-500"
          onClick={goHome}
        >
          <img
            src={logo}
            alt="NOVAFX Logo"
            className={`object-contain transition-all duration-500 ${
              isScrolled ? "h-6 md:h-7" : "h-6 md:h-9"
            }`}
          />
        </button>

        {/* ── Desktop Menu ──────────────────────────────────────────────────── */}
        <ul className="hidden items-center gap-5 text-sm font-medium text-gray-700 lg:flex xl:gap-8">
          {menuItems.map((item) => (
            <li
              key={item}
              className="relative"
              onMouseEnter={() => setHoveredMenu(item)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <button
                type="button"
                className={`nav-link flex cursor-pointer items-center gap-1.5 rounded-full py-2 transition-all duration-300 ${
                  isMenuActive(item)
                    ? "bg-[#014421]/10 px-4 font-bold text-[#014421]"
                    : "px-1 hover:bg-white/70 hover:px-4 hover:text-green-700"
                }`}
                onClick={() => {
                  // if (item === "Home") {
                  //   goHome();
                  //   return;
                  // }
                  setHoveredMenu((prev) => (prev === item ? null : item));
                }}
              >
                {item}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    hoveredMenu === item ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Desktop Dropdown */}
              {hoveredMenu === item && (
                <div className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3">
                  <div className="nav-dropdown overflow-hidden rounded-2xl bg-white/98 p-2 shadow-2xl backdrop-blur-xl">
                    {dropdownContent[item].map((option, index) => (
                      <button
                        type="button"
                        key={index}
                        className="block w-full rounded-xl px-4 py-2.5 text-left text-sm text-gray-700 transition-all duration-300 hover:translate-x-1 hover:bg-green-50 hover:text-green-700"
                        onClick={() => handleDropdownOptionClick(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* ── Desktop Buttons ───────────────────────────────────────────────── */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => {
              navigate("/signup");
              scrollPageTop();
            }}
            className="button-shine px-4 py-2 rounded-full text-xs font-medium
              bg-white/80 backdrop-blur-md border border-gray-300 text-gray-700
              shadow-sm transition-all duration-300 ease-out
              hover:-translate-y-0.5 hover:border-green-700 hover:bg-green-50 hover:text-green-700 hover:shadow-md
              active:translate-y-0"
          >
            Sign up
          </button>

          <button
            type="button"
            onClick={() => {
              navigate("/login");
              scrollPageTop();
            }}
            className="button-shine px-6 py-2 rounded-full text-xs font-medium
              bg-[#014421] text-white
              shadow-md transition-all duration-300 ease-out
              hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-900/20
              active:translate-y-0"
          >
            Login
          </button>
        </div>

        {/* ── Mobile: User Icon + Hamburger ─────────────────────────────────── */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            className={`p-2 rounded-full transition-colors ${
              isScrolled ? "bg-gray-100 hover:bg-gray-200" : "hover:bg-white"
            }`}
            onClick={() => {
              navigate("/login");
              scrollPageTop();
            }}
          >
            <FaUser className="w-5 h-5 text-gray-700" />
          </button>

          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : "text-gray-700 hover:bg-white"
            }`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* ── Mobile Menu Panel ─────────────────────────────────────────────── */}
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/45 z-40 lg:hidden"
              onClick={closeMobileMenu}
            />

            <div className="absolute left-3 right-3 top-[calc(100%+0.5rem)] z-50 animate-slideDown rounded-3xl bg-white/98 shadow-2xl backdrop-blur-xl lg:hidden">
              <div className="flex flex-col py-2 max-h-[80vh] overflow-y-auto">
                {menuItems.map((item) => (
                  <div key={item} className="border-b border-gray-100">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-green-50 active:bg-green-100"
                      onClick={() => toggleMobileDropdown(item)}
                    >
                      <span className="font-medium text-gray-700 hover:text-green-600 active:text-green-700 transition-colors">
                        {item}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-gray-500 transition-transform duration-300 ${
                          openMobileDropdown === item ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown Items */}
                    {openMobileDropdown === item && (
                      <div className="bg-green-50 pl-8 animate-slideDown">
                        {dropdownContent[item].map((option, index) => (
                          <button
                            type="button"
                            key={index}
                            className="block w-full border-l-2 border-transparent px-4 py-3 text-left text-sm text-gray-600 transition-all duration-300 hover:translate-x-1 hover:border-green-700 hover:bg-green-100 hover:text-green-700"
                            onClick={() => handleDropdownOptionClick(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile Sign Up / Login buttons */}
                <div className="flex gap-3 px-6 py-4">
                  <button
                    type="button"
                    onClick={() => {
                      navigate("/signup");
                      closeMobileMenu();
                      scrollPageTop();
                    }}
                    className="flex-1 py-2 rounded-full text-xs font-medium border border-gray-300 text-gray-700 hover:border-green-700 hover:text-green-700 transition-colors"
                  >
                    Sign up
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      navigate("/login");
                      closeMobileMenu();
                      scrollPageTop();
                    }}
                    className="flex-1 py-2 rounded-full text-xs font-medium bg-[#014421] text-white hover:bg-green-800 transition-colors"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
