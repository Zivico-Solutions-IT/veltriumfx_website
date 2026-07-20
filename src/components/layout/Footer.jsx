// src/components/layout/Footer.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const iconProps = {
  className: "text-green-700 shrink-0",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  viewBox: "0 0 24 24",
};

const MailIcon = () => (
  <svg {...iconProps} width="14" height="14" aria-hidden="true">
    <path d="m4 4 8 8 8-8" />
    <rect width="18" height="14" x="3" y="5" rx="2" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...iconProps} width="14" height="14" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    {...iconProps}
    className="mt-1 text-green-700 shrink-0"
    width="14"
    height="14"
    aria-hidden="true"
  >
    <path d="M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();

  // ─── Same route map as Navbar ─────────────────────────────────────────────
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Market", path: "/crypto" },
    { label: "Trading Tools", path: "/economic-calendar" },
    { label: "Partners", path: "/partners" },
    { label: "About Us", path: "/why-us" },
  ];

  const supportLinks = [
    { label: "FAQ", path: "/faq" },
    { label: "Contact Us", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms-conditions" },
  ];

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="reveal-section bg-[#f5f5f5] px-3 pb-10 pt-5 text-sm text-black sm:px-5 sm:py-10 sm:text-base lg:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-left md:grid-cols-4 md:items-start">

        {/* ── Brand ─────────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-start">
          <button onClick={() => handleNav("/")} className="mt-3 sm:mt-10">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-32 object-contain sm:h-10 sm:w-40"
            />
          </button>

          <p className="mt-3 max-w-sm leading-6 text-gray-700">
            Empowering traders globally with next-generation tools, tight
            spreads and uncompromising security.
          </p>

          <img
            src="/QR.PNG"
            alt="QR Code"
            className="mt-5 hidden h-14 w-14 md:block"
          />
        </div>

        {/* ── Quick Links + Support ─────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-8 md:contents">

          {/* Quick Links */}
          <div className="md:mt-10">
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-gray-700">
              {quickLinks.map(({ label, path }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(path)}
                    className="hover:text-green-700 transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:mt-10">
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="space-y-3 text-gray-700">
              {supportLinks.map(({ label, path }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(path)}
                    className="hover:text-green-700 transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Contact ───────────────────────────────────────────────────────── */}
        <div className="md:mt-10">
          <h3 className="mb-4 font-semibold">Contact</h3>

          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <MailIcon />
              <a
                href="mailto:support@fxtrade.com"
                className="break-all hover:text-green-700"
              >
                support@fxtrade.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <PhoneIcon />
              <a href="tel:+15551234567" className="hover:text-green-700">
                +1 (555) 123-4567
              </a>
            </p>

            <p className="flex items-start gap-2">
              <MapPinIcon />
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-700"
              >
                Global Tech Hub, London
              </a>
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white transition duration-300 hover:-translate-y-1 hover:bg-green-700"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white transition duration-300 hover:-translate-y-1 hover:bg-green-700"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white transition duration-300 hover:-translate-y-1 hover:bg-green-700"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Legal Block ─────────────────────────────────────────────────────── */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-400 pt-5 text-left text-xs leading-relaxed text-gray-700">
        <div className="mt-5 space-y-4 text-base text-justify">
          <p>
            NOVAFXM is operated under Nova Finance Tech Ltd, Registered with the Financial Services Authority (FSA) of
            EURO-CARIBBEAN TRUSTEES LTD. Registration No. 27139 BC.   <br />  (Since 2024)
          </p>
          <p>
            Risk Statement: Trading derivatives, CFDs, forex, commodities, stocks and other financial instruments carries a high level of risk and may not be suitable for all investors. Investors may lose part or all of their invested capital and in some cases losses may exceed the original investment amount. Before engaging in trading activities, clients should carefully consider their investment objectives, level of experience and risk appetite. It is strongly recommended to seek independent financial, legal and tax advice before making any investment decisions.
          </p>
          <p>
            Trading in financial markets offers potential rewards but also involves significant risk. Do not trade with funds you cannot afford to lose. Certain financial products or services may not be permitted in some jurisdictions. It is the responsibility of each client to ensure that trading activities comply with their local laws and regulations.
          </p>
          <p>
            Nothing contained on this website should be considered as financial advice, investment advice or a recommendation by NOVAFXM, Nova Finance Tech Ltd or any of its affiliates, directors, officers, employees or representatives.
          </p>
          <p>
            Restricted Regions: NOVAFXM does not provide services to citizens or residents of jurisdictions where such services would violate local laws or regulations, including but not limited to the United States, Cuba, Iraq, Myanmar, North Korea and Sudan.
          </p>
        </div>

        {/* ── Bottom Bar ────────────────────────────────────────────────────── */}
        <div className="flex flex-col gap-3 md:flex-row md:justify-between border-t border-gray-300 pt-5 mt-4 text-base">
          <p>© 2026 NOVAFXM. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
