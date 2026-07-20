import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Headphones,
  User,
  MessageSquare,
  ChevronDown,
  Check,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

// Scroll Animation Component
const ScrollReveal = ({ children, delay = 0, threshold = 0.2, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
      case "left":
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12';
      case "right":
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12';
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${getDirectionClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Staggered Card Component
const StaggeredCard = ({ children, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </div>
  );
};

// ── EmailJS credentials ──────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_gin16hi";
const EMAILJS_TEMPLATE_ID = "template_c86hpz9";
const EMAILJS_PUBLIC_KEY  = "ec69D4BHhqQl_rNAb";
const contactActionButtonClass =
  "button-shine group/action mt-auto inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#D3D3D3] px-6 text-sm font-bold text-[#00674F] shadow-md shadow-[#D3D3D3]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D3D3D3] hover:shadow-lg";
const contactMapButtonClass =
  "button-shine group/action mt-5 inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#D3D3D3] px-6 text-sm font-bold text-[#00674F] shadow-md shadow-[#D3D3D3]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D3D3D3] hover:shadow-lg";
const contactPrimaryButtonClass =
  "button-shine group/action mt-auto inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#00674F] px-6 text-sm font-bold text-white shadow-md shadow-[#00674F]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00674F] hover:shadow-lg";
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const navigate = useNavigate();
  const formRef  = useRef(null);

  // Form state
  const [fields, setFields]     = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [agreed, setAgreed]     = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus]     = useState("idle"); // idle | sending | success | error

  // Initialise EmailJS once
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (name === "message") setCharCount(value.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please agree to our Privacy Policy & Terms of Service before sending.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFields({ name: "", email: "", phone: "", subject: "", message: "" });
      setCharCount(0);
      setAgreed(false);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#f7f8f7] min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[calc(100vh-72px)] items-center justify-start overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-16 sm:min-h-[calc(100vh-80px)] md:px-20 lg:min-h-[calc(100vh-84px)] lg:bg-[length:100%_100%]"
        style={{ backgroundImage: "url('/contact Us.jpeg')" }}
      >
        {/* Animated Background with Zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ transformOrigin: 'center' }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/contact Us.jpeg')" }}
            />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-[#00674F]/70 animate-[fadeIn_1.5s_ease-out]"></div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-start">
          <div className="max-w-2xl text-left text-white">
            <p className="animate-[fadeInUp_0.6s_ease-out] mb-5 text-sm font-medium uppercase tracking-[4px] text-[#D3D3D3] md:text-base">
              Support Desk
            </p>
            <h1 className="animate-[fadeInUp_0.8s_ease-out] text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl">
              Speak With <br />
              <span className="text-[#00674F] text-2xl md:text-4xl">
                VeltriumFX
              </span>
            </h1>
            <p className="animate-[fadeInUp_1s_ease-out] mt-6 max-w-xl text-base leading-relaxed text-gray-200 md:text-lg">
              Get practical assistance from our team through the channel that suits you best.
            </p>

            <button
              type="button"
              className="button-shine animate-[fadeInUp_1.2s_ease-out] mt-7 inline-flex w-full max-w-[220px] items-center justify-center gap-3 rounded-full bg-[#D3D3D3] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[#D3D3D3]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D3D3D3] hover:shadow-lg sm:w-auto"
              onClick={() => {
                document.getElementById("contact-form")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Start Conversation
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <style>
          {`
            .hero-fade {
              opacity: 0;
              transform: translateY(25px);
              animation: heroFade 1.6s ease forwards;
            }

            .delay-150 {
              animation-delay: 0.15s;
            }

            .delay-300 {
              animation-delay: 0.3s;
            }

            @keyframes heroFade {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-6 items-stretch">

          {/* LEFT SIDE */}
          <ScrollReveal delay={0} threshold={0.2} direction="left">
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#edf1ed] bg-white p-5 sm:p-6 md:p-8 shadow-[0_14px_34px_rgba(15,23,42,0.06)]">
              <div className="relative z-10 flex h-full flex-col">
                <h2 className="mt-5 text-2xl font-bold leading-tight text-[#171717] sm:text-3xl md:text-4xl">
                  Reach the <span className="text-[#00674F]">VeltriumFX</span> Team
                </h2>
                <div className="mt-5 h-[3px] w-14 rounded-full bg-[#00674F]"></div>
                <p className="max-w-2xl mt-4 text-sm leading-7 text-gray-600 md:text-base">
                  Our client desk is ready to help with account, platform and service questions.{" "}
                  <span className="font-semibold text-[#00674F]">Choose a contact option</span>{" "}
                  and we will guide you from there.
                </p>

                {/* CARDS */}
                <div className="grid flex-1 grid-cols-1 items-stretch gap-5 mt-8 md:grid-cols-2">
                  {/* CALL CARD */}
                  <StaggeredCard index={0}>
                    <div className="group flex h-full flex-col rounded-2xl border border-[#edf0ed] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(1,68,33,0.12)]">
                      <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-[#d5e4d8] bg-[#D3D3D3]">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:bg-[#00674F]">
                          <Phone className="text-[#00674F] group-hover:text-white" size={24} />
                        </div>
                        <span className="absolute w-3 h-3 rounded-full right-1 top-8 bg-[#D3D3D3] ring-4 ring-white"></span>
                      </div>
                      <div className="mt-5 text-center">
                        <span className="text-sm font-semibold text-[#00674F]">Phone Desk</span>
                        <h3 className="mt-2 text-xl font-bold text-[#161616] md:text-2xl">Call our team</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-500">Direct assistance by phone</p>
                        <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00674F]"></div>
                      </div>
                      <ul className="mb-6 space-y-3 text-sm text-gray-600 mt-6">
                        <li className="flex items-center gap-3"><CheckCircle size={16} className="text-[#00674F]" />Talk through urgent questions</li>
                        <li className="flex items-center gap-3"><CheckCircle size={16} className="text-[#00674F]" />Business-hour availability</li>
                        <li className="flex items-center gap-3"><CheckCircle size={16} className="text-[#00674F]" />Clear, practical guidance</li>
                      </ul>
                      <a href="tel:+4412345678" className={contactPrimaryButtonClass}>
                        <Phone size={18} />Call now<ArrowRight size={18} className="transition-transform duration-300 group-hover/action:translate-x-1" />
                      </a>
                    </div>
                  </StaggeredCard>

                  {/* EMAIL CARD */}
                  <StaggeredCard index={1}>
                    <div className="group flex h-full flex-col rounded-2xl border border-[#edf0ed] bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(1,68,33,0.12)]">
                      <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-[#d5e4d8] bg-[#D3D3D3]">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 group-hover:bg-[#00674F]">
                          <Mail className="text-[#00674F] group-hover:text-white" size={24} />
                        </div>
                        <span className="absolute w-3 h-3 rounded-full right-1 top-8 bg-[#D3D3D3] ring-4 ring-white"></span>
                      </div>
                      <div className="mt-5 text-center">
                        <span className="text-sm font-semibold text-[#00674F]">Support</span>
                        <h3 className="mt-2 text-xl font-bold text-[#161616] md:text-2xl">Email Assistance</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-500">Send detailed questions to our specialists.</p>
                        <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#00674F]"></div>
                      </div>
                      <ul className="mb-6 space-y-3 text-sm text-gray-600 mt-6">
                        <li className="flex items-center gap-3"><CheckCircle size={16} className="text-[#00674F]" />Structured replies for complex issues</li>
                        <li className="flex items-center gap-3"><CheckCircle size={16} className="text-[#00674F]" />Helpful follow-up when needed</li>
                        <li className="flex items-center gap-3"><CheckCircle size={16} className="text-[#00674F]" />Message us any time</li>
                      </ul>
                      <a href="mailto:support@veltriumfx.com" className={contactPrimaryButtonClass}>
                        <Mail size={18} />Send email<ArrowRight size={18} className="transition-transform duration-300 group-hover/action:translate-x-1" />
                      </a>
                    </div>
                  </StaggeredCard>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE */}
          <ScrollReveal delay={0} threshold={0.2} direction="right">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00674F] via-[#00674F] to-[#00674F] p-5 sm:p-6 text-white shadow-[0_14px_34px_rgba(0,40,22,0.22)]">
              <div className="absolute right-5 top-5 h-28 w-28 bg-[radial-gradient(rgba(185,255,120,0.4)_1px,transparent_1.5px)] [background-size:10px_10px] opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col">
                <h3 className="mt-6 mb-2 text-2xl font-bold md:text-3xl">Office Details</h3>
                <div className="mt-4 h-[3px] w-12 rounded-full bg-[#D3D3D3]"></div>
                <div className="space-y-5 mt-6">
                  <div className="flex gap-4 pt-6 pb-6 border-b border-white/15">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D3D3D3] to-[#D3D3D3] shadow-[0_8px_24px_rgba(117,214,43,0.30)]"><MapPin size={20} /></div>
                    <div><h4 className="text-base font-bold">Address</h4><p className="mt-1 text-sm leading-6 text-white/85">82 Buckingham Palace Rd,<br />London SW1W 9TJ, UK</p></div>
                  </div>
                  <div className="flex gap-4 pb-6 border-b border-white/15">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D3D3D3] to-[#D3D3D3] shadow-[0_8px_24px_rgba(117,214,43,0.30)]"><Phone size={20} /></div>
                    <div><h4 className="text-base font-bold">Phone</h4><p className="mt-1 text-sm text-white/85">+44 12345678</p></div>
                  </div>
                  <div className="flex gap-4 pb-6 border-b border-white/15">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D3D3D3] to-[#D3D3D3] shadow-[0_8px_24px_rgba(117,214,43,0.30)]"><Mail size={20} /></div>
                    <div><h4 className="text-base font-bold">Email</h4><p className="mt-1 text-sm break-all text-white/85">support@veltriumfx.com</p></div>
                  </div>
                  <div className="flex gap-4 pb-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D3D3D3] to-[#D3D3D3] shadow-[0_8px_24px_rgba(117,214,43,0.30)]"><Clock size={20} /></div>
                    <div><h4 className="text-base font-bold">Working Hours</h4><p className="mt-1 text-sm leading-6 text-white/85">Monday - Friday<br />9:00 AM - 6:00 PM (GMT)</p></div>
                  </div>
                </div>
                <a href="https://www.google.com/maps/search/?api=1&query=82+Buckingham+Palace+Rd+London+SW1W+9TJ+UK" target="_blank" rel="noopener noreferrer" className={contactMapButtonClass}>
                  <MapPin size={18} />View on Google Map<ArrowRight size={18} className="transition-transform duration-300 group-hover/action:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

     {/* FORM SECTION */}
<section id="contact-form" className="px-4 mx-auto scroll-mt-24 pb-14 max-w-7xl sm:px-6 md:px-10 md:pb-16">
  <ScrollReveal delay={0} threshold={0.2} direction="up">
    <div className="relative overflow-hidden bg-white rounded-xl border border-gray-100 p-5 sm:p-6 md:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <div className="pointer-events-none absolute right-5 top-5 h-28 w-28 bg-[radial-gradient(#d9eadc_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-80"></div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.55fr] gap-7 lg:gap-10">
        <div className="pb-8 border-b border-gray-200 lg:border-b-0 lg:border-r lg:pr-10 lg:pb-0">
          <div className="flex items-center gap-2 mb-5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D3D3D3] text-[#00674F]"><Headphones size={19} /></span>
            <span className="rounded-full bg-[#D3D3D3] px-3 py-1 text-[11px] font-bold uppercase text-[#00674F]">Get in touch</span>
          </div>
          <h2 className="text-2xl font-bold leading-tight text-gray-950 md:text-4xl">
            Send Your <span className="text-[#00674F]">Message</span> to Us
          </h2>
          <div className="h-1 mt-6 bg-[#00674F] rounded-full w-14"></div>
          <p className="max-w-sm mt-5 text-sm leading-7 text-gray-600">
            We're here to help and answer any questions you may have. Fill out the form and our team will get back to you as soon as possible.
          </p>
          <div className="flex justify-center mt-9 lg:justify-start">
            <img src="/ContacUs 2.PNG" alt="" className="w-48 sm:w-56" />
          </div>
        </div>

        {/* ── EMAILJS FORM ── */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-[0.95fr_1.35fr] gap-5 md:gap-6"
        >
          <div className="space-y-5">
            <label className="flex items-center gap-3 px-4 text-gray-500 transition bg-white border border-gray-200 rounded-md shadow-sm h-14 focus-within:border-[#00674F]">
              <User className="text-[#00674F]" size={19} />
              <input
                type="text"
                name="from_name"
                value={fields.name}
                onChange={(e) => setFields((p) => ({ ...p, name: e.target.value }))}
                placeholder="Your Name"
                required
                className="w-full text-sm bg-transparent outline-none placeholder:text-gray-500"
              />
            </label>

            <label className="flex items-center gap-3 px-4 text-gray-500 transition bg-white border border-gray-200 rounded-md shadow-sm h-14 focus-within:border-[#00674F]">
              <Mail className="text-[#00674F]" size={19} />
              <input
                type="email"
                name="from_email"
                value={fields.email}
                onChange={(e) => setFields((p) => ({ ...p, email: e.target.value }))}
                placeholder="Email Address"
                required
                className="w-full text-sm bg-transparent outline-none placeholder:text-gray-500"
              />
            </label>

            <label className="flex items-center gap-3 px-4 text-gray-500 transition bg-white border border-gray-200 rounded-md shadow-sm h-14 focus-within:border-[#00674F]">
              <Phone className="text-[#00674F]" size={19} />
              <input
                type="text"
                name="phone"
                value={fields.phone}
                onChange={(e) => setFields((p) => ({ ...p, phone: e.target.value }))}
                placeholder="Phone"
                className="w-full text-sm bg-transparent outline-none placeholder:text-gray-500"
              />
            </label>

            <label className="flex items-center gap-3 px-4 text-gray-500 transition bg-white border border-gray-200 rounded-md shadow-sm h-14 focus-within:border-[#00674F]">
              <MessageSquare className="text-[#00674F]" size={19} />
              <input
                type="text"
                name="subject"
                value={fields.subject}
                onChange={(e) => setFields((p) => ({ ...p, subject: e.target.value }))}
                placeholder="Subject"
                className="w-full text-sm bg-transparent outline-none placeholder:text-gray-500"
              />
              <ChevronDown className="text-gray-500 shrink-0" size={18} />
            </label>
          </div>

          <div className="flex flex-col">
            <label className="relative flex-1 transition bg-white border border-gray-200 rounded-md shadow-sm focus-within:border-[#00674F]">
              <textarea
                name="message"
                maxLength="1000"
                value={fields.message}
                onChange={handleChange}
                placeholder="Message..."
                className="h-full min-h-[160px] w-full resize-none rounded-md bg-transparent p-4 text-sm outline-none placeholder:text-gray-500"
              ></textarea>
              <span className="absolute text-xs text-gray-500 bottom-2 right-3">{charCount} / 1000</span>
            </label>
          </div>

          <div className="flex flex-col items-center md:col-span-2">
            <label className="flex items-center gap-3 text-xs text-gray-600 cursor-pointer" onClick={() => setAgreed((p) => !p)}>
              <span className={`flex h-5 w-5 items-center justify-center rounded transition-colors ${agreed ? "bg-[#00674F]" : "border border-gray-300 bg-white"} text-white`}>
                {agreed && <Check size={15} />}
              </span>
              <span>I agree to our <span className="font-semibold text-[#00674F]">Privacy Policy & Terms of Service</span></span>
            </label>

            {status === "success" && (
              <p className="mt-4 text-sm font-semibold text-[#00674F]">✅ Message sent successfully! We'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm font-semibold text-red-600">❌ Something went wrong. Please try again or email us directly.</p>
            )}

            <button
  type="submit"
  disabled={status === "sending"}
  className="button-shine flex items-center justify-center w-full max-w-md gap-3 px-8 mt-5 text-sm font-bold text-white transition bg-[#00674F] rounded-md shadow-lg h-12 shadow-[#00674F]/15 hover:bg-[#00674F] disabled:opacity-60 disabled:cursor-not-allowed"
>
  <Send size={18} />
  {status === "sending" ? "Sending…" : "Send Now"}
</button>

            <p className="flex items-center gap-2 mt-4 text-xs text-gray-500">
              <span className="text-[#00674F]">Safe</span>
              Your information is safe with us.
            </p>
          </div>
        </form>
      </div>
    </div>
  </ScrollReveal>
</section>
      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Button Shine Effect */
        .button-shine {
          position: relative;
          overflow: hidden;
        }

        .button-shine::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .button-shine:hover::before {
          left: 100%;
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          [class*="animate-"] {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
