"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971504622865"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 shadow-2xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="flex-shrink-0" />
      <span className="text-sm font-medium tracking-wide hidden sm:block">WhatsApp Us</span>
    </a>
  );
}
