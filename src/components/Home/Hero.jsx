import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function LetterReveal({ text, delay = 0, step = 0.035, className = "" }) {
  let letterIndex = 0;

  return (
    <span className={`letter-reveal ${className}`} aria-hidden="true">
      {text.split(" ").map((word, wordIndex, words) => (
        <React.Fragment key={`${word}-${wordIndex}`}>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((character) => {
              const currentIndex = letterIndex;
              letterIndex += 1;

              return (
                <span
                  key={`${character}-${currentIndex}`}
                  className="letter-reveal-char inline-block"
                  style={{ "--letter-delay": `${delay + currentIndex * step}s` }}
                >
                  {character}
                </span>
              );
            })}
          </span>
          {wordIndex < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </span>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  useEffect(() => {
    // Add touch feedback for mobile
    const button = buttonRef.current;
    if (button) {
      const handleTouchStart = () => {
        button.style.transform = 'scale(0.97)';
        // Add shine class on touch start
        button.classList.add('mobile-shine-active');
        setTimeout(() => {
          button.classList.remove('mobile-shine-active');
        }, 300);
      };
      const handleTouchEnd = () => {
        button.style.transform = '';
      };
      
      button.addEventListener('touchstart', handleTouchStart);
      button.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        button.removeEventListener('touchstart', handleTouchStart);
        button.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-64px)] scroll-mt-20 items-center justify-center overflow-hidden bg-gradient-to-br from-[#002f23] via-[#00674F] to-[#004233] px-4 py-10 sm:min-h-[calc(100vh-72px)] sm:px-6 sm:py-8 lg:px-8 text-white"
    >

      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      {/* Background circles */}
      <div className="hero-circle hero-circle-left top-[44%] w-[180px] sm:top-1/2 sm:w-[340px] md:w-[560px] opacity-[0.05] blur-3xl mix-blend-screen bg-white"></div>
      <div className="hero-circle hero-circle-right top-[44%] w-[180px] sm:top-1/2 sm:w-[340px] md:w-[560px] opacity-[0.05] blur-3xl mix-blend-screen bg-white"></div>

      <div className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none" aria-hidden="true">
        <img
          src="/hero-market-visual.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#00674F]/40"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[21rem] text-center sm:max-w-3xl md:max-w-5xl">

        {/* Badge */}
        <div className="inline-flex items-center max-w-full gap-2 px-4 py-2 mb-6 bg-black/20 backdrop-blur-md border border-[#D3D3D3]/20 rounded-full shadow-lg sm:mb-8 sm:gap-3 sm:px-6 sm:py-2.5">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/32?img=1"
              className="w-6 h-6 border-2 border-[#00674F] rounded-full shrink-0 sm:h-8 sm:w-8"
              alt=""
            />
            <img
              src="https://i.pravatar.cc/32?img=2"
              className="w-6 h-6 border-2 border-[#00674F] rounded-full shrink-0 sm:h-8 sm:w-8"
              alt=""
            />
            <img
              src="https://i.pravatar.cc/32?img=3"
              className="w-6 h-6 border-2 border-[#00674F] rounded-full shrink-0 sm:h-8 sm:w-8"
              alt=""
            />
          </div>

          <span className="min-w-0 text-xs font-bold tracking-wider text-[#D3D3D3] sm:text-sm uppercase">
            Chosen by 450K+ Traders
          </span>
        </div>

        {/* Heading */}
        <h1
          className="leading-[1.2] sm:leading-tight mb-4"
          aria-label="Trade Global Markets with Clarity"
        >
         <span
          className="
            block
            text-[2.2rem]
            font-extrabold
            text-white
            xs:text-[2.5rem]
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
            tracking-tight
          "
        >
          <LetterReveal text="Trade Global " />

          <span className="text-[#D3D3D3]">
            <LetterReveal text="Markets" delay={0.46} />
          </span>
        </span>

          <span className="mt-2 block text-[2rem] font-medium leading-tight text-white/90 sm:mt-4 sm:text-5xl md:text-7xl">
            <LetterReveal text="with Clarity" delay={0.76} />
          </span>
        </h1>

        {/* Description */}
        <p
          className="mx-auto mt-6 hidden max-w-[19rem] text-sm leading-8 text-center text-[#D3D3D3] sm:block sm:max-w-2xl sm:px-2 sm:text-lg sm:leading-relaxed font-medium"
          aria-label="Access forex, commodities, indices and digital assets through a refined trading environment built for confident decisions."
        >
          <LetterReveal
            text="Access forex, commodities, indices and digital assets through a refined trading environment built for confident decisions."
            delay={1.85}
            step={0.018}
          />
        </p>
        <p
          className="mx-auto mt-5 w-full max-w-sm px-3 text-center text-[0.95rem] leading-7 text-[#D3D3D3] sm:hidden font-medium"
          aria-label="Access forex, commodities, indices and digital assets through a refined trading environment built for confident decisions."
        >
          <LetterReveal
            text="Access forex, commodities, indices and digital assets through a refined trading environment built for confident decisions."
            delay={1.85}
            step={0.018}
          />
        </p>
        
        {/* Button with shine animation - Fully Mobile Responsive */}
       <div className="mt-8 sm:mt-10">
        <button
          ref={buttonRef}
          type="button"
          onClick={() => navigate("/login")}
          className="relative overflow-hidden rounded-sm bg-[#D3D3D3] px-8 py-3.5 text-sm sm:px-12 sm:py-4 sm:text-base font-bold text-[#00674F] shadow-xl transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-2xl active:scale-95 group border border-[#D3D3D3]"
        >
          <span className="relative z-20 flex items-center justify-center gap-2 uppercase tracking-widest">
            Start Trading
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </div>
      </div>

      <style jsx>{`
        .letter-reveal-char {
          opacity: 0;
          animation: letterRevealAnim 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: var(--letter-delay);
          display: inline-block;
          transform: translateY(15px);
        }
        @keyframes letterRevealAnim {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
