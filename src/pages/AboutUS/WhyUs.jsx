import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  User,
  Star,
  TrendingUp,
  Globe,
  Headphones,
  Lock,
  CheckCircle2
} from "lucide-react";
import whyUsImg from "../../assets/images/why us.png";

/* ================= DATA ================= */
const values = [
  {
    title: "Transparency",
    description: "We prioritize open communication and integrity, ensuring our clients have full access to the information necessary to make informed decisions and trade confidently.",
    icon: CheckCircle2,
  },
  {
    title: "Integrity",
    description: "Trust is the foundation of our reputation. We are committed to upholding the highest standards of integrity in all our actions and interactions.",
    icon: Scale,
  },
  {
    title: "Customer-Centric",
    description: "Our clients are at the heart of everything we do. We focus on providing personalized solutions tailored to each trader’s specific needs.",
    icon: User,
  },
  {
    title: "Security",
    description: "We use industry-leading security measures to protect your funds and personal data, ensuring a safe and secure trading environment.",
    icon: Lock,
  },
];

const features = [
  {
    icon: TrendingUp,
    title: "Advanced & Cutting-Edge\nPlatform",
    description: "Enjoy a seamless trading experience with our state-of-the-art technology, featuring fast execution and advanced trading tools.",
  },
  {
    icon: Globe,
    title: "Diverse Range of\nProducts",
    description: "Access global markets including forex, commodities, indices and more with flexible trading solutions.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our professional support team is available anytime to assist throughout your trading journey.",
  },
];

/* ================= INSTITUTIONAL ANIMATION VARIANTS ================= */
const institutionalEasing = [0.25, 0.1, 0.25, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: institutionalEasing } 
  }
};

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: institutionalEasing } 
  }
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 1, ease: institutionalEasing } 
  }
};

const WhyUs = () => {
  return (
    <div className="font-sans bg-[#F9FAFB] text-gray-900 overflow-hidden">
      
      {/* ================= HERO ================= */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center min-h-[50vh] bg-white border-b border-gray-200">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: institutionalEasing }}
          className="absolute inset-0 z-0"
        >
          <img src={whyUsImg} alt="Corporate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f16] via-[#003b2a]/95 to-[#00674F]/90"></div>
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl"
          >
            <motion.span variants={fadeUpVariants} className="inline-block py-1 px-3 rounded-sm bg-white/10 text-white text-[11px] font-bold tracking-widest mb-6 uppercase border border-white/20">
              Built For Focused Traders
            </motion.span>
            <motion.h1 variants={fadeUpVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-white">
              Trade With VeltriumFX
            </motion.h1>
            <motion.p variants={fadeUpVariants} className="text-sm lg:text-base text-gray-300 leading-relaxed mb-8 max-w-xl">
              VeltriumFX combines secure infrastructure, practical trading tools, and responsive support for a more disciplined market experience.
            </motion.p>
            <motion.div variants={fadeUpVariants}>
              <button
                onClick={() => document.getElementById("why-us-about")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center bg-white text-[#00674F] px-8 py-3 rounded-sm font-semibold text-sm transition-colors hover:bg-gray-100"
              >
                View Details
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="why-us-about" className="py-12 lg:py-16 bg-white lg:bg-gradient-to-r lg:from-[#001f16] lg:via-[#003b2a]/95 lg:to-[#00674F]/90 border-b border-gray-200 lg:border-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageVariants}
              className="relative"
            >
              <div className="rounded-sm overflow-hidden border border-gray-200 lg:border-white/20 p-2 shadow-sm bg-white lg:bg-white/10">
                <img 
                  src={whyUsImg} 
                  alt="Corporate Office" 
                  className="w-full h-[300px] lg:h-auto object-cover rounded-sm" 
                />
              </div>
              <motion.div 
                variants={fadeUpVariants}
                className="absolute -bottom-6 -right-6 bg-[#00674F] text-white p-6 rounded-sm shadow-sm border border-[#005541] lg:border-[#D3D3D3]/30 hidden md:block"
              >
                <div className="text-2xl font-bold mb-1">10+</div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-white/80">Years Experience</div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div variants={fadeUpVariants} className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#00674F] lg:bg-[#D3D3D3]"></span>
                <span className="text-[#00674F] lg:text-[#D3D3D3] font-semibold uppercase tracking-widest text-[11px]">Our Approach</span>
              </motion.div>
              <motion.h2 variants={fadeUpVariants} className="text-2xl lg:text-3xl font-bold text-gray-900 lg:text-white mb-6 leading-snug">
                Designed Around VeltriumFX
              </motion.h2>
              
              <motion.div variants={fadeUpVariants} className="space-y-4 text-gray-600 lg:text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  VeltriumFX is shaped around a simple goal: give traders a clear, secure, and efficient environment for making market decisions.
                </p>
                <p>
                  We continue to improve the platform experience, broaden access to global instruments, and provide support that helps clients move with confidence.
                </p>
                <p>
                  Our vision is to make modern market participation easier to understand, more transparent to manage, and more reliable day to day.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-16 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-10"
          >
            <motion.span variants={fadeUpVariants} className="text-[#00674F] font-bold uppercase tracking-wider text-xs">Why Traders Choose Us</motion.span>
            <motion.div variants={fadeUpVariants} className="w-10 h-[2px] bg-[#00674F] mx-auto mt-2 mb-4"></motion.div>
            <motion.h2 variants={fadeUpVariants} className="text-3xl lg:text-4xl font-extrabold text-[#0B132B] mb-4">What Sets VeltriumFX Apart</motion.h2>
            <motion.p variants={fadeUpVariants} className="text-gray-500 max-w-2xl mx-auto text-base lg:text-lg">
              Powerful platforms, global markets, and dedicated support —<br className="hidden sm:block"/> everything you need to trade with confidence.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUpVariants}
                className="relative bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col h-full border border-gray-100 group"
              >
                {/* Abstract corner background */}
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-[#00674F]/10 to-transparent rounded-tl-full opacity-100 pointer-events-none transition-all duration-500 group-hover:scale-110"></div>

                <div className="relative z-10 flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#e6f4ef] to-white flex items-center justify-center relative shadow-inner">
                    <div className="absolute inset-0 bg-[#00674F]/5 rounded-full blur-sm"></div>
                    <item.icon className="w-8 h-8 text-[#00674F] relative z-10" strokeWidth={1.5} />
                  </div>
                  <div className="text-right mt-2">
                    <span className="text-xl font-bold text-[#00674F]">0{idx + 1}</span>
                    <div className="w-5 h-[2px] bg-[#00674F] ml-auto mt-1"></div>
                  </div>
                </div>

                <h3 className="relative z-10 text-2xl font-bold text-[#0B132B] mb-4 whitespace-pre-line leading-snug">
                  {item.title}
                </h3>
                
                <div className="relative z-10 w-8 h-[2px] bg-[#00674F] mb-6 opacity-30"></div>
                
                <p className="relative z-10 text-gray-500 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-16 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeftVariants}
              className="lg:col-span-4 bg-[#003b2a] p-8 sm:p-10 rounded-2xl relative overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#004f3c] via-[#003b2a] to-[#001f16] z-0"></div>
              
              {/* Subtle wave simulation */}
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D3D3D3]/10 to-transparent rounded-full blur-3xl z-0 pointer-events-none"></div>
              <svg className="absolute bottom-0 left-0 w-full h-auto text-white/5 opacity-50 z-0 pointer-events-none" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="currentColor" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl border border-[#D3D3D3]/60 flex items-center justify-center mb-10 shadow-sm bg-transparent">
                  <Star className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">Our Core Values</h2>
                <p className="text-emerald-50/80 text-sm sm:text-base leading-relaxed mb-10 flex-grow">
                  The principles that guide our platform, ensuring an environment of trust, reliability, and continuous support for our clients.
                </p>
                <div className="w-10 h-[2px] bg-[#D3D3D3]/60"></div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="lg:col-span-8 bg-[#F8F9FA] flex flex-col justify-center"
            >
              <div className="grid sm:grid-cols-2">
                {values.map((val, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeUpVariants}
                    className={`flex flex-col sm:flex-row gap-5 p-6 sm:p-8 transition-all duration-300 group
                      ${idx === 0 ? 'sm:border-r sm:border-b border-b border-gray-200' : ''}
                      ${idx === 1 ? 'sm:border-b border-b border-gray-200' : ''}
                      ${idx === 2 ? 'sm:border-r border-b sm:border-b-0 border-gray-200' : ''}
                      ${idx === 3 ? '' : ''}
                    `}
                  >
                    <div className="shrink-0 w-16 h-16 rounded-full bg-[#e6f4ef] flex items-center justify-center text-[#00674F] shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <val.icon className="w-7 h-7" strokeWidth={2} />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-bold text-[#0B132B] mb-3">{val.title}</h3>
                      <div className="w-8 h-[2px] bg-[#00674F] mb-4"></div>
                      <p className="text-gray-500 text-sm leading-relaxed text-justify sm:text-left">{val.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
};
export default WhyUs;
