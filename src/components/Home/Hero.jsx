import React from "react";
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
                  className="letter-reveal-char"
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

  return (
    <section
      id="hero"
      className="hero-with-custom-banner relative flex min-h-[calc(100svh-64px)] scroll-mt-20 items-center justify-center overflow-hidden bg-gray-100 px-4 py-10 sm:min-h-[calc(100vh-72px)] sm:px-6 sm:py-8 lg:px-8"
    >

      {/* Background circles */}
      <div className="hero-circle hero-circle-left top-[44%] w-[180px] sm:top-1/2 sm:w-[340px] md:w-[560px]">
        <div className="absolute inset-[24%] rounded-full bg-gray-100"></div>
      </div>

      <div className="hero-circle hero-circle-right top-[44%] w-[180px] sm:top-1/2 sm:w-[340px] md:w-[560px]">
        <div className="absolute inset-[24%] rounded-full bg-gray-100"></div>
      </div>

      <div className="hero-market-visual" aria-hidden="true">
        <img
          src="/hero-market-visual.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="hero-market-visual__overlay"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[21rem] text-center sm:max-w-3xl md:max-w-5xl">

        {/* Badge */}
        <div className="hero-trust-badge inline-flex items-center max-w-full gap-2 px-3 py-1.5 mb-5 bg-white border border-gray-200 rounded-full shadow-sm sm:mb-6 sm:gap-3 sm:px-6 sm:py-2 transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-default">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/32?img=1"
              className="w-6 h-6 border-2 border-white rounded-full shrink-0 sm:h-8 sm:w-8"
              alt=""
            />
            <img
              src="https://i.pravatar.cc/32?img=2"
              className="w-6 h-6 border-2 border-white rounded-full shrink-0 sm:h-8 sm:w-8"
              alt=""
            />
            <img
              src="https://i.pravatar.cc/32?img=3"
              className="w-6 h-6 border-2 border-white rounded-full shrink-0 sm:h-8 sm:w-8"
              alt=""
            />
          </div>

          <span className="min-w-0 text-xs font-medium leading-none text-gray-600 sm:text-sm">
            Chosen by 450K+ Traders
          </span>
        </div>

        {/* Heading */}
        <h1
          className="leading-[1.34] sm:leading-tight"
          aria-label="Trade Global Markets with Clarity"
        >
         <span
          className="
            block
            text-[2.05rem]
            leading-tight
            font-bold
            text-[#00674F]
            xs:text-[2.5rem]
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
          "
        >
          <LetterReveal text="Trade Global " />

          <span className="font-light text-gray-900">
            <LetterReveal text="Markets" delay={0.46} />
          </span>
        </span>

          <span className="mt-2 block text-[2rem] font-light leading-tight text-gray-900 sm:mt-4 sm:text-5xl md:text-7xl">
            <LetterReveal text="with Clarity" delay={0.76} />
          </span>
        </h1>

        {/* Description */}
        <p
          className="mx-auto mt-3 hidden max-w-[19rem] text-sm leading-9 text-justify text-gray-500 sm:mt-4 sm:block sm:max-w-2xl sm:px-2 sm:text-center sm:text-base sm:leading-relaxed md:text-lg"
          aria-label="Access forex, commodities, indices and digital assets through a refined trading environment built for confident decisions."
        >
          <LetterReveal
            text="Access forex, commodities, indices and digital assets through a refined trading environment built for confident decisions."
            delay={1.85}
            step={0.018}
          />
        </p>
        <p
          className="mx-auto mt-3 w-full max-w-sm px-3 text-center text-[0.95rem] leading-7 text-gray-500 sm:hidden"
          aria-label="Access forex, commodities, indices and digital assets through a refined trading environment built for confident decisions."
        >
          <LetterReveal
            text="Access forex, commodities, indices and digital assets through a refined trading environment built for confident decisions."
            delay={1.85}
            step={0.018}
          />
        </p>
        

        {/* Button */}
       <div className="hero-trade-cta mt-5 sm:mt-7">
  <button
    type="button"
    onClick={() => navigate("/login")}
    className="w-auto max-w-[200px] rounded-full bg-[#D3D3D3] px-5 py-2.5 text-xs font-semibold text-[#00674F] shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:shadow-[0_10px_20px_rgba(211,211,211,0.3)] active:scale-95 sm:w-auto sm:max-w-none sm:px-10 sm:py-3 sm:text-base"
    style={{
      WebkitTapHighlightColor: 'transparent',
      touchAction: 'manipulation',
      userSelect: 'none',
      WebkitUserSelect: 'none',
    }}
  >
    <span className="block text-center font-semibold tracking-wide text-[#00674F] sm:tracking-normal">
      Start Trading
    </span>
  </button>
</div>
      </div>
    </section>
  );
}