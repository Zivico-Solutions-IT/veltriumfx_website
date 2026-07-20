// src/App.jsx
// import type { ReactNode } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Layout
import Header from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ChatBox from "./components/layout/ChatBox";

// Home sections
import Hero from "./components/Home/Hero";
import AboutUs from "./components/Home/AboutUs";
import Methords from "./components/Home/Methords";
import Packeges from "./components/Home/Packeges";
import Account from "./components/Home/Accoun";
import Review from "./components/Home/Review";
import Quiz from "./components/Home/Quiz";


// Pages
import Profile from "./auth/profile";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import AccountType from "./pages/Trading/AccountType";
import TermsConditions from "./pages/Trading/Terms&Conditions";
import WhyUs from "./pages/AboutUS/WhyUs";
import Market from "./pages/Market/Cryptography";
import Indices from "./pages/Market/Indices";
import Stock from "./pages/Market/Stock";
import Commodities from "./pages/Market/Commodities";
import Deposit from "./pages/Trading/Deposits&Withdrawals";
import Promotions from "./pages/Trading/Promotions";
import Forex from "./pages/Market/Forex";

import FAQ from "./pages/AboutUS/Faqs";
import Partners from "./pages/Partners/Brokers.jsx";

import EconomicCalendar from "./pages/Trading Tools/EconomicCalender";



import ContactPage from "./pages/AboutUS/ContacUs";
import AutomatedTrading from "./pages/Trading Tools/AutomatedTrading";
import ChatbotPage from "./pages/Chatbot";


//footer pages
import Privacy from "./pages/PrivancyPolicy";
// ─── Layout Wrappers ──────────────────────────────────────────────────────────
import Platform from "./pages/Trading/Platform.jsx";  

/** Pages that share the top Header */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

/** Auth pages — no header */
function AuthLayout({ children }) {
  return <>{children}</>;
}

// ─── Page Compositions ────────────────────────────────────────────────────────

function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Methords />
      <Account />
      <Packeges />
      <Review />
      <Quiz />
     
      <Footer />
      <ChatBox />
    </>
  );
}


// ─── App ─────────────────────────────────────────────────────────────────────

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* ── Auth routes (no header) ── */}
        <Route
          path="/login"
          element={
            <AuthLayout>
                   <LoginPage onSignUpClick={() => window.location.href = "/signup"} />

            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
            <RegisterPage onLoginClick={() => window.location.href = "/login"} />

            </AuthLayout>
          }
        />
         <Route
          path="/profile"
          element={
            <AuthLayout>
            <Profile/>

            </AuthLayout>
          }
        />

        {/* ── Main routes (with shared header) ── */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/account-type"
          element={
            <MainLayout>
              <AccountType />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <MainLayout>
              <TermsConditions />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />
        <Route
          path="/why-us"
          element={
            <MainLayout>
              <WhyUs />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />
        <Route
          path="/crypto"
          element={
            <MainLayout>
              <Market />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />
        

        <Route
          path="/indices"
          element={
            <MainLayout>
              <Indices />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />

        <Route
          path="/stocks"
          element={
            <MainLayout>
              <Stock />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />

        <Route
          path="/markets/commodities"
          element={
            <MainLayout>
              <Commodities />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />

        <Route
          path="/privacy"
          element={
            <MainLayout>
              <Privacy />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />

         <Route
          path="/deposit"
          element={
            <MainLayout>
              <Deposit />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />

        <Route
          path="/tools/automated-trading"
          element={
            <MainLayout>
              <AutomatedTrading />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />
        
         <Route
          path="/promotions"
          element={
            <MainLayout>
              <Promotions />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />

          

           <Route
          path="/forex"
          element={
            <MainLayout>
              <Forex />
                <Footer />
              <ChatBox />
            </MainLayout>
          }
        />


        <Route
          path="/economic-calendar"
          element={
            <MainLayout>
              <EconomicCalendar />

              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />


             <Route
          path="/faq"
          element={
            <MainLayout>
              <FAQ />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
           />
      <Route
          path="/platform"
          element={
            <MainLayout>
              <Platform />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
           />

            <Route
          path="/partners"
          element={
            <MainLayout>
              <Partners />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
           />

           


          

        {/* ── Catch-all ── */}
        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactPage />
              <Footer />
              <ChatBox />
            </MainLayout>
          }
        />

        <Route
          path="/chatbot"
          element={
            <MainLayout>
              <ChatbotPage />
              <Footer />
            </MainLayout>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
