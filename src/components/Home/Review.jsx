import { Users, Globe, Headset } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    name: "David Chen",
    role: "Day Trader",
    image: "/src/assets/images/1.jpeg",
    text: "Execution speed is extremely fast and reliable. Perfect for short-term trading strategies.",
  },
  {
    name: "Sarah Jenkins",
    role: "Forex Analyst",
    image: "/src/assets/images/2.jpeg",
    text: "Customer support is very responsive and professional. Always available even during market volatility.",
  },
  {
    name: "John Silva",
    role: "Investor",
    image: "/src/assets/images/1.jpeg",
    text: "Stable and secure trading platform. Clean UI makes trading smooth and easy.",
  },
  {
    name: "Amal Perera",
    role: "Retail Trader",
    image: "/src/assets/images/2.jpeg",
    text: "Very beginner-friendly platform. Simple tools helped me start trading quickly.",
  },
  {
    name: "Nimal Fernando",
    role: "Crypto Trader",
    image: "/src/assets/images/1.jpeg",
    text: "Great performance across crypto & forex markets. Reliable execution even in volatility.",
  },
];

const ReviewCard = ({ name, role, image, text, index }) => (
  <div
    className="review-card-animate relative w-[calc(100vw-2rem)] max-w-[280px] flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl sm:w-[300px] sm:max-w-[300px] md:w-[350px] md:max-w-[350px] md:rounded-2xl md:p-6"
    style={{ animationDelay: `${(index % reviews.length) * 0.18}s` }}
  >
    <span className="absolute inset-0 pointer-events-none review-gold-border rounded-xl md:rounded-2xl"></span>

    <div className="mb-3 text-sm text-[#D4AF37]">★★★★★</div>

    <p className="mb-4 text-xs leading-6 text-justify text-gray-700 sm:text-sm">
      {text}
    </p>

    <div className="flex items-center gap-2 sm:gap-3">
      <img
        src={image}
        alt={name}
        className="object-cover w-8 h-8 rounded-full sm:h-9 sm:w-9"
      />

      <div>
        <h4 className="text-sm font-semibold text-green-700">{name}</h4>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const CountUpNumber = ({ end, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: Users,
    value: 20,
    suffix: "M+",
    title: "Traders",
    desc: "Active users executing trades daily across our global network.",
  },
  {
    icon: Globe,
    value: 150,
    suffix: "+",
    title: "Trusted Globally",
    desc: "Regulated and compliant in multiple jurisdictions worldwide.",
  },
  {
    icon: Headset,
    value: 24,
    suffix: "/7",
    title: "Expert Support",
    desc: "Multilingual support team ready to assist you at any time.",
  },
];

const StatBox = ({ icon: Icon, value, suffix, title, desc }) => (
  <div className="flex flex-col items-center p-4 text-center interactive-card rounded-2xl sm:p-5">
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#D4AF37] md:h-12 md:w-12">
      <Icon size={20} color="black" />
    </div>

    <h3 className="text-xl font-bold md:text-2xl">
      <CountUpNumber end={value} suffix={suffix} duration={2000} />
    </h3>

    <p className="text-sm font-bold text-gray-600">{title}</p>

    <p className="mt-2 text-xs text-justify text-gray-500 sm:text-center">
      {desc}
    </p>
  </div>
);

export default function Review() {
  return (
    <section className="px-4 py-10 bg-white reveal-section sm:px-6 sm:py-8 md:py-12 lg:px-8">
      <h2 className="mb-6 text-xl font-bold leading-tight text-center sm:mb-7 sm:text-2xl md:mb-9 md:text-3xl">
        Traders Experience With Us
      </h2>

      <div className="mx-auto overflow-hidden max-w-7xl">
        <div className="flex gap-4 w-max animate-scroll sm:gap-5 md:gap-8">
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={index} index={index} {...review} />
          ))}
        </div>
      </div>

      <div className="mt-6 text-center sm:mt-10 md:mt-14">
        <h2 className="mb-5 text-xl font-bold leading-tight sm:mb-7 md:mb-9 md:text-2xl">
          Built on Trust & Performance
        </h2>

        <div className="grid max-w-4xl grid-cols-1 gap-4 mx-auto sm:grid-cols-3 md:gap-10">
          {stats.map((stat, index) => (
            <StatBox key={index} {...stat} />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 45s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }

          @keyframes reviewFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .review-card-animate {
            animation: reviewFloat 5s ease-in-out infinite;
          }

          .animate-scroll:hover .review-card-animate {
            animation-play-state: paused;
          }

          @keyframes goldBorderGlow {
            0%, 100% {
              opacity: 0.55;
              box-shadow: inset 0 0 0 1px rgba(212, 175, 55, 0.35);
            }
            50% {
              opacity: 1;
              box-shadow:
                inset 0 0 0 2px rgba(212, 175, 55, 0.95),
                0 0 22px rgba(212, 175, 55, 0.24);
            }
          }

          .review-gold-border {
            animation: goldBorderGlow 2.8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}