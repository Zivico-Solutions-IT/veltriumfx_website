import React from "react";
import ChatBox from "../components/layout/ChatBox";

export default function ChatbotPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f7] px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
          NOVAFXM Support
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-[#014421] sm:text-4xl">
          Chat with Support
        </h1>
        <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
          Start a conversation with our assistant and get help with accounts,
          deposits, and support questions.
        </p>
      </div>

      <ChatBox embedded initialOpen />
    </main>
  );
}
