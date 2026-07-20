import React, { useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";

const quickReplies = [
  "How do I open an account?",
  "What is the minimum deposit?",
  "I need support",
];

const getBotReply = (message) => {
  const text = message.toLowerCase();

  if (text.includes("deposit")) {
    return "Our account plans start from a $100 minimum deposit.";
  }

  if (text.includes("account") || text.includes("sign")) {
    return "You can open an account by clicking the Sign up button.";
  }

  if (text.includes("support") || text.includes("help")) {
    return "Our support team will help you shortly.";
  }

  return "Ask me about account, deposit or support.";
};

export default function ChatBox({ embedded = false, initialOpen = false }) {
  const [isOpen, setIsOpen] = useState(embedded || initialOpen);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! Welcome to NOVAFXM. What is your name?",
    },
  ]);

  // 🔥 Step control
  const [step, setStep] = useState("name");

  // 🔥 User data
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^[0-9]{7,15}$/.test(phone);

  const sendMessage = (text = input) => {
    const cleanText = text.trim();
    if (!cleanText) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: cleanText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // 🔥 Step logic
    setTimeout(() => {
      let botText = "";

      if (step === "name") {
        setUserData((prev) => ({ ...prev, name: cleanText }));
        setStep("email");
        botText = "Great! Please enter your email address.";
      }

      else if (step === "email") {
        if (!validateEmail(cleanText)) {
          botText = "Please enter a valid email address.";
        } else {
          setUserData((prev) => ({ ...prev, email: cleanText }));
          setStep("phone");
          botText = "Nice! Now enter your phone number.";
        }
      }

      else if (step === "phone") {
        if (!validatePhone(cleanText)) {
          botText = "Please enter a valid phone number (numbers only).";
        } else {
          setUserData((prev) => ({ ...prev, phone: cleanText }));
          setStep("chat");
          botText =
            "Thanks! You can now start chatting. How can I help you today?";
        }
      }

      else {
        botText = getBotReply(cleanText);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: botText,
        },
      ]);
    }, 400);
  };

  return (
    <div className={embedded ? "w-full" : "fixed bottom-5 right-4 z-[70] sm:bottom-6 sm:right-6"}>
      {(embedded || isOpen) && (
        <div
          className={
            embedded
              ? "mx-auto flex h-[620px] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
              : "flex h-[520px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl sm:w-96"
          }
        >
          
          {/* Header */}
          <div className="flex items-center justify-between bg-[#014421] px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <Bot size={22} />
              <div>
                <h3 className="text-sm font-semibold">NOVAFXM Assistant</h3>
                <p className="text-xs text-white/75">Online now</p>
              </div>
            </div>

            {!embedded && (
              <button onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 px-4 py-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-2 text-sm ${
                    msg.sender === "user"
                      ? "bg-[#014421] text-white"
                      : "bg-white text-gray-700 shadow"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4">
            
            {/* ❌ Hide quick replies until form complete */}
            {step === "chat" && (
              <div className="mb-2 flex gap-2 overflow-x-auto">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => sendMessage(reply)}
                    className="rounded-full border px-3 py-1 text-xs"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  step === "name"
                    ? "Enter your name..."
                    : step === "email"
                    ? "Enter your email..."
                    : step === "phone"
                    ? "Enter your phone number..."
                    : "Type your message..."
                }
                className="flex-1 rounded-full border px-4 py-2 text-sm"
              />

              <button className="bg-[#014421] text-white px-4 rounded-full">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle */}
      {!embedded && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-[#014421] text-white flex items-center justify-center"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={26} />}
        </button>
      )}
    </div>
  );
}
