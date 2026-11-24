import { MessagesSquare, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { company_name, phone_number, whatsapp_number } from "./secrete";

const CallToAction = () => {
  return (
    <div
      className="w-full fixed bottom-4 left-0 flex gap-3 px-4 z-50 lg:hidden pointer-events-none"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="w-full max-w-md mx-auto flex gap-3 p-2 rounded-3xl bg-[#090d16]/90 backdrop-blur-md border border-amber-400/25 shadow-2xl shadow-black/70 pointer-events-auto">
        <WhatsappBtn />
        <CallBtn />
      </div>
    </div>
  );
};

export default CallToAction;

const WhatsappBtn = () => {
  const encodedText = encodeURIComponent(
    `Hello ${company_name}, I would like to book a consultation.`,
  );

  return (
    <motion.a
      href={`https://wa.me/${whatsapp_number}?text=${encodedText}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-[#05110d] font-bold px-4 py-3 text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 transition-shadow duration-200"
      whileTap={{ scale: 0.96 }}
    >
      <MessagesSquare className="w-4 h-4 shrink-0" strokeWidth={2.4} />
      <span>WhatsApp</span>
    </motion.a>
  );
};

const CallBtn = () => {
  return (
    <motion.a
      href={`tel:${phone_number}`}
      aria-label="Call Now"
      className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-200 to-amber-500 text-[#090d16] font-bold px-4 py-3 text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-400/45 transition-shadow duration-200"
      whileTap={{ scale: 0.96 }}
    >
      <PhoneCall className="w-4 h-4 shrink-0" strokeWidth={2.4} />
      <span>Call Now</span>
    </motion.a>
  );
};