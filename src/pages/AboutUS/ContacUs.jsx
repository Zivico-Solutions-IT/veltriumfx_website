import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import contacUsImg from "../../assets/images/contacUs.png";
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
  Globe2,
  Building2,
} from "lucide-react";

// ── EmailJS credentials ──────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_gin16hi";
const EMAILJS_TEMPLATE_ID = "template_c86hpz9";
const EMAILJS_PUBLIC_KEY  = "ec69D4BHhqQl_rNAb";
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const navigate = useNavigate();
  const formRef  = useRef(null);

  // Form state
  const [fields, setFields]     = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [agreed, setAgreed]     = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus]     = useState("idle"); // idle | sending | success | error
  const [focusedField, setFocusedField] = useState(null);

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
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen overflow-hidden font-sans selection:bg-[#00674F] selection:text-white">
      {/* Sleek Hero Section */}
      <section className="relative flex min-h-[calc(100vh-72px)] sm:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-84px)] items-center justify-start overflow-hidden bg-gray-900 pt-24 pb-16 lg:pt-32 lg:pb-20">
        
        {/* Background Image with slow zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-[slowZoom_20s_ease-in-out_infinite]"
            style={{ backgroundImage: `url(${contacUsImg})`, transformOrigin: 'center' }}
          />
        </div>
        
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl px-4 sm:px-6 lg:px-8 justify-center text-center">
          <div className="max-w-2xl text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl mb-5 sm:mb-6">
                Speak With <span className="text-[#D3D3D3]">VeltriumFX</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-10 sm:mb-12 leading-6 md:leading-7">
                Get practical assistance from our team through the channel that suits you best. We are available 24/5 to support your trading journey.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="button-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D3D3D3] px-5 py-2 text-[11px] font-bold text-[#00674F] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white sm:px-6 sm:text-xs"
                >
                  Explore More
                </button>
                <button
                  onClick={() => document.getElementById("contact-info")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                >
                  Contact Details
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section id="contact-info" className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-[#0B132B] md:text-4xl mb-4">Reach the Team</h2>
          <div className="mx-auto w-16 h-[3px] bg-gradient-to-r from-[#00674F] to-[#D3D3D3] rounded-full mb-6"></div>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Choose your preferred contact option and our dedicated client desk will guide you from there.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Phone Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,103,79,0.08)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#D3D3D3]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#00674F] transition-all duration-300">
              <Phone className="w-8 h-8 text-[#00674F] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Desk</h3>
            <p className="text-gray-500 mb-6 min-h-[50px]">Direct assistance by phone for urgent questions and guidance.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="text-[#D3D3D3] w-5 h-5" /> <span>Urgent trading support</span></div>
              <div className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="text-[#D3D3D3] w-5 h-5" /> <span>Business-hour availability</span></div>
            </div>
            <a href="tel:+4412345678" className="inline-flex items-center justify-center w-full gap-2 rounded-xl bg-gray-50 border border-gray-200 py-3 text-sm font-bold text-[#00674F] transition-colors group-hover:bg-[#00674F] group-hover:text-white">
              Call +44 12345678
            </a>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,103,79,0.08)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#D3D3D3]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#00674F] transition-all duration-300">
              <Mail className="w-8 h-8 text-[#00674F] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-500 mb-6 min-h-[50px]">Send detailed questions or documents to our specialists securely.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="text-[#D3D3D3] w-5 h-5" /> <span>Complex issue resolution</span></div>
              <div className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="text-[#D3D3D3] w-5 h-5" /> <span>Helpful follow-ups</span></div>
            </div>
            <a href="mailto:support@veltriumfx.com" className="inline-flex items-center justify-center w-full gap-2 rounded-xl bg-gray-50 border border-gray-200 py-3 text-sm font-bold text-[#00674F] transition-colors group-hover:bg-[#00674F] group-hover:text-white">
              support@veltriumfx.com
            </a>
          </motion.div>

          {/* Office Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="group bg-gradient-to-br from-[#001f16] via-[#003b2a] to-[#00674F] rounded-3xl p-8 shadow-xl shadow-[#00674F]/20 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D3D3D3]/30 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 border border-white/20">
              <Building2 className="w-8 h-8 text-[#D3D3D3]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Global Office</h3>
            <p className="text-emerald-100/80 mb-6 min-h-[50px]">Visit our headquarters for scheduled corporate inquiries.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-sm text-emerald-50"><MapPin className="text-[#D3D3D3] w-5 h-5 shrink-0" /> <span>PO Box 4385, Cardiff, CF14 8LH</span></div>
              <div className="flex items-center gap-3 text-sm text-emerald-50"><Clock className="text-[#D3D3D3] w-5 h-5 shrink-0" /> <span>Mon-Fri, 9am-6pm GMT</span></div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=PO+Box+4385+Cardiff+CF14+8LH" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#00674F]">
              View on Maps
            </a>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
          >
            {/* Left side text/image */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D3D3D3]/10 border border-[#D3D3D3]/20 mb-6">
                <MessageSquare className="w-4 h-4 text-[#00674F]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#00674F]">Direct Message</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B132B] mb-6 leading-tight">
                Let's get in <br/><span className="text-[#00674F]">touch today.</span>
              </h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-md">
                Fill out the form below and one of our dedicated support specialists will respond within 24 hours.
              </p>
              
              {/* Trust Indicators */}
              <div className="space-y-4 max-w-md">
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#D3D3D3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Secure & Confidential</h4>
                    <p className="text-xs text-gray-500">Your information is protected by 256-bit encryption.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#D3D3D3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Fast Response Time</h4>
                    <p className="text-xs text-gray-500">Average response time is under 2 hours during business days.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D3D3D3]/10 blur-[50px] rounded-full pointer-events-none" />
              
              <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className={`relative transition-all duration-300 rounded-xl border ${focusedField === 'name' ? 'border-[#D3D3D3] ring-4 ring-[#D3D3D3]/10' : 'border-gray-200'}`}>
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className={`h-5 w-5 ${focusedField === 'name' ? 'text-[#D3D3D3]' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type="text" name="from_name" value={fields.name} required
                      onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      className="block w-full pl-11 pr-4 py-4 bg-transparent outline-none text-gray-900 placeholder-gray-400 text-sm font-medium"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className={`relative transition-all duration-300 rounded-xl border ${focusedField === 'email' ? 'border-[#D3D3D3] ring-4 ring-[#D3D3D3]/10' : 'border-gray-200'}`}>
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className={`h-5 w-5 ${focusedField === 'email' ? 'text-[#D3D3D3]' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type="email" name="from_email" value={fields.email} required
                      onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      className="block w-full pl-11 pr-4 py-4 bg-transparent outline-none text-gray-900 placeholder-gray-400 text-sm font-medium"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className={`relative transition-all duration-300 rounded-xl border ${focusedField === 'phone' ? 'border-[#D3D3D3] ring-4 ring-[#D3D3D3]/10' : 'border-gray-200'}`}>
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className={`h-5 w-5 ${focusedField === 'phone' ? 'text-[#D3D3D3]' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type="tel" name="phone" value={fields.phone}
                      onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      className="block w-full pl-11 pr-4 py-4 bg-transparent outline-none text-gray-900 placeholder-gray-400 text-sm font-medium"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className={`relative transition-all duration-300 rounded-xl border ${focusedField === 'subject' ? 'border-[#D3D3D3] ring-4 ring-[#D3D3D3]/10' : 'border-gray-200'}`}>
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Globe2 className={`h-5 w-5 ${focusedField === 'subject' ? 'text-[#D3D3D3]' : 'text-gray-400'}`} />
                    </div>
                    <input
                      type="text" name="subject" value={fields.subject} required
                      onFocus={() => setFocusedField('subject')} onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      className="block w-full pl-11 pr-4 py-4 bg-transparent outline-none text-gray-900 placeholder-gray-400 text-sm font-medium"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className={`relative transition-all duration-300 rounded-xl border ${focusedField === 'message' ? 'border-[#D3D3D3] ring-4 ring-[#D3D3D3]/10' : 'border-gray-200'}`}>
                  <textarea
                    name="message" required maxLength="1000" value={fields.message}
                    onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                    onChange={handleChange}
                    className="block w-full p-4 min-h-[160px] resize-none bg-transparent outline-none text-gray-900 placeholder-gray-400 text-sm font-medium"
                    placeholder="How can we help you?"
                  ></textarea>
                  <span className="absolute bottom-3 right-4 text-xs font-medium text-gray-400">{charCount}/1000</span>
                </div>

                <div className="flex items-center gap-3 pt-2 pb-4">
                  <button 
                    type="button"
                    onClick={() => setAgreed(!agreed)}
                    className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${agreed ? 'bg-[#00674F] border-[#00674F]' : 'border-gray-300 bg-gray-50 hover:border-[#D3D3D3]'}`}
                  >
                    {agreed && <Check size={14} className="text-white" />}
                  </button>
                  <span className="text-sm text-gray-600" onClick={() => setAgreed(!agreed)}>
                    I agree to the <span className="font-bold text-[#00674F] cursor-pointer hover:underline">Privacy Policy</span>
                  </span>
                </div>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="p-4 rounded-xl bg-green-50 border border-green-100 text-green-700 text-sm font-bold flex items-center gap-2">
                      <CheckCircle size={18} /> Message sent successfully!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm font-bold flex items-center gap-2">
                      ❌ Error sending message. Try again later.
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0B132B] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#00674F] hover:shadow-[#00674F]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/> Sending...</span>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
