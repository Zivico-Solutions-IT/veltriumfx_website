import React from "react";

/* =========================
   SECTION DATA
========================= */
const sections = [
  {
    title: "1. WHO WE ARE",
    text: "Suggested text: Our website address is: https://NOVAFXM.com.",
  },
  {
    title: "2. COMMENTS",
    text: `Suggested text: When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.

An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment..`,
  },
  {
    title: "3. MEDIA",
    text: `Suggested text: If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.`,
  },
  {
    title: "4. COOKIES",
    text: `Suggested text:If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day..`,
  },
  {
    title: "5. EMBEDED CONTENT FROM OTHER WEBSITES",
    text: `Suggested text: Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.`,
  },
  {
    title: "6. DATA SHARING",
    text: `Suggested text: If you request a password reset, your IP address will be included in the reset email..`,
  },
  {
    title: "7. DATA RETENTION",
    text: `Suggested text: If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information..`,
  },
  {
    title: "8.YOUR RIGHTS",
    text: `Suggested text:  If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.`,
  },
  {
    title: "9. DATA SENDING",
    text: `Suggested text: Visitor comments may be checked through automated spam detection.`,
  },
];

/* =========================
   COMPONENT
========================= */
const PrivacyPolicy = () => {
  const sectionHeadingClass =
    "mb-5 text-2xl font-bold leading-tight text-[#014421] sm:mb-8 sm:text-3xl";
  const paragraphClass =
    "break-words whitespace-pre-line text-justify text-sm leading-7 text-gray-700 sm:text-[15px] sm:leading-8";

  return (
    <div className="w-full bg-[#f5f5f5] overflow-hidden font-sans">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <img
          src="/privancy policy.png"
          alt="Privacy Background"
          className="absolute inset-0 h-full w-full scale-105 object-cover animate-[slowZoom_15s_ease-in-out_infinite]"
        />

        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-10 right-0 h-64 w-64 rounded-full bg-green-500/20 blur-3xl animate-pulse sm:right-10 sm:h-[500px] sm:w-[500px]"></div>

        <div className="absolute inset-0 overflow-hidden">
          <span className="absolute top-[15%] right-[15%] h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
          <span className="absolute top-[20%] right-[25%] h-3 w-3 rounded-full bg-green-500 animate-ping"></span>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-4 py-16 sm:min-h-[calc(100vh-80px)] sm:px-6 lg:min-h-[calc(100vh-84px)] lg:px-12">
          <div className="max-w-2xl text-white animate-fadeInUp">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2.5 text-xs font-semibold text-black shadow-lg animate-float sm:mb-8 sm:gap-3 sm:px-5 sm:py-3 sm:text-sm">
              <svg
                className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2 5 5v6c0 5 3.4 9.7 7 11 3.6-1.3 7-6 7-11V5l-7-3Zm3.7 8.3-4.2 4.2a1 1 0 0 1-1.4 0l-1.8-1.8a1 1 0 1 1 1.4-1.4l1.1 1.1 3.5-3.5a1 1 0 0 1 1.4 1.4Z" />
              </svg>

              <span>Secure Data, Clear Policy</span>
            </div>

            <h1 className="max-w-[12ch] text-4xl font-bold leading-tight sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-green-500">Privacy</span> Policy
            </h1>

            <div className="my-6 h-1 w-20 rounded-full bg-[#D4AF37] animate-pulse sm:my-8 sm:w-28"></div>

            <p className="max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
              Your privacy is important to us. This Privacy Policy explains how we
              collect, use, and protect your information.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes slowZoom {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.08);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-6px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full px-3 pb-8 pt-14 sm:px-5 sm:pb-10 md:pt-20 lg:px-6">

        <div className="mx-auto max-w-7xl space-y-10 sm:space-y-12">
          {sections.map((item, index) => (
            <div key={index}>
              <h2 className={sectionHeadingClass}>
                {item.title}
              </h2>

              <p className={paragraphClass}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default PrivacyPolicy;
