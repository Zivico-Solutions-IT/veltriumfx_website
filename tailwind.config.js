export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "price-change": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "tab-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "tab-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.7)" },
          "50%": { boxShadow: "0 0 20px 5px rgba(34, 197, 94, 0.4)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "card-entrance": {
          "0%": { opacity: "0", transform: "translateY(30px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "tab-slide": {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "border-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(34, 197, 94, 0.3), inset 0 0 5px rgba(34, 197, 94, 0.1)" },
          "50%": { boxShadow: "0 0 20px rgba(34, 197, 94, 0.6), inset 0 0 10px rgba(34, 197, 94, 0.3)" },
        },
        "gradient-border": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "border-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
        "price-change": "price-change 0.3s ease-out",
        "tab-fade": "tab-fade 0.4s ease-in-out",
        "tab-glow": "tab-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 3s infinite",
        "card-entrance": "card-entrance 0.5s ease-out forwards",
        "tab-slide": "tab-slide 0.3s ease-out",
        "border-glow": "border-glow 2s ease-in-out infinite",
        "gradient-border": "gradient-border 3s ease infinite",
        "border-rotate": "border-rotate 8s linear infinite",
      },
    },
  },
  plugins: [],
}