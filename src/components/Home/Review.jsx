import { Users, Globe, Headset } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    name: "David Chen",
    role: "Day Trader",
    image: "/src/assets/images/review-1.jpg",
    text: "Execution speed is extremely fast and reliable. Perfect for short-term trading strategies.",
  },
  {
    name: "Sarah Jenkins",
    role: "Forex Analyst",
    image: "/src/assets/images/review-2.jpg",
    text: "Customer support is very responsive and professional. Always available even during market volatility.",
  },
  {
    name: "John Silva",
    role: "Investor",
    image: "/src/assets/images/review-3.jpg",
    text: "Stable and secure trading platform. Clean UI makes trading smooth and easy.",
  },
  {
    name: "Suresh Kumar",
    role: "Retail Trader",
    image: "/src/assets/images/review-4.jpg",
    text: "Very beginner-friendly platform. Simple tools helped me start trading quickly.",
  },
  {
    name: "Kamalesh Kannan",
    role: "Crypto Trader",
    image: "/src/assets/images/review-5.jpg",
    text: "Great performance across crypto & forex markets. Reliable execution even in volatility.",
  },
];

const ReviewCard = ({ name, role, image, text, index }) => (
  <div
    className="review-card-animate relative w-[calc(100vw-2rem)] max-w-[280px] flex-shrink-0 overflow-hidden rounded-sm bg-white border border-[#D3D3D3] p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#00674F] hover:shadow-xl sm:w-[300px] sm:max-w-[300px] md:w-[350px] md:max-w-[350px]"
    style={{ animationDelay: `${(index % reviews.length) * 0.18}s` }}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-[#00674F] scale-x-0 transition-transform origin-left duration-300 group-hover:scale-x-100"></div>

    <div className="mb-4 flex text-lg text-[#00674F]">★★★★★</div>

    <p className="mb-6 text-sm leading-relaxed text-gray-700">
      "{text}"
    </p>

    <div className="flex items-center gap-4 mt-auto">
      <img
        src={image}
        alt={name}
        className="object-cover w-10 h-10 rounded-sm border border-[#D3D3D3]"
      />

      <div>
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">{name}</h4>
        <p className="text-xs font-semibold text-[#00674F]">{role}</p>
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
  <div className="flex flex-col items-center p-6 text-center border border-[#D3D3D3] rounded-sm bg-white transition-all duration-300 hover:border-[#00674F] hover:shadow-lg group">
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-[#D3D3D3]/30 text-[#00674F] transition-all duration-300 group-hover:bg-[#00674F] group-hover:text-white">
      <Icon size={24} strokeWidth={2} />
    </div>

    <h3 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
      <CountUpNumber end={value} suffix={suffix} duration={2000} />
    </h3>

    <p className="mt-2 text-sm font-bold uppercase tracking-wider text-[#00674F]">{title}</p>

    <p className="mt-3 text-sm leading-relaxed text-gray-600">
      {desc}
    </p>
  </div>
);

export default function Review() {
  return (
    <section className="px-4 py-16 bg-[#F8F9FA] sm:px-6 sm:py-24 lg:px-8 border-b border-[#D3D3D3]">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#00674F]"></span>
          <span className="text-[#00674F] font-bold uppercase tracking-widest text-[11px]">Testimonials</span>
          <span className="w-8 h-[2px] bg-[#00674F]"></span>
        </div>
        
        <h2 className="mb-12 text-3xl font-extrabold leading-tight text-center text-gray-900 sm:mb-16 sm:text-4xl md:text-5xl">
          Traders Experience <span className="text-[#00674F]">With Us</span>
        </h2>
      </div>

      <div className="mx-auto overflow-hidden max-w-7xl mb-16 sm:mb-24">
        <div className="flex gap-6 w-max animate-scroll md:gap-8 hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={index} index={index} {...review} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-12 sm:mt-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-[#00674F]"></span>
          <span className="text-[#00674F] font-bold uppercase tracking-widest text-[11px]">Global Reach</span>
          <span className="w-8 h-[2px] bg-[#00674F]"></span>
        </div>

        <h2 className="mb-10 text-3xl font-extrabold leading-tight text-center text-gray-900 sm:mb-12 md:text-4xl">
          Built on Trust & Performance
        </h2>

        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto sm:grid-cols-3 md:gap-8">
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

          .review-card-animate:hover .absolute.top-0 {
            transform: scaleX(1);
          }
        `}
      </style>
    </section>
  );
}
