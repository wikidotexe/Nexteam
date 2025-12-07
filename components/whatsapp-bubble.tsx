"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

const WhatsAppBubble = () => {
  const phone = "62895330931423";
  const text = encodeURIComponent("Halo, saya tertarik dengan layanan Nexteam.");

  return (
    <Link
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-20 md:bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-black/40 bg-background/80 text-black shadow-lg backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 dark:border-white/60 dark:text-white"
    >
      <MessageCircle className="h-5 w-5" />
    </Link>
  );
};

export default WhatsAppBubble;
