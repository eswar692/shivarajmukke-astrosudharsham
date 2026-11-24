import { phone_number, whatsapp_number, company_name } from "./secrete";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const NEW_BANNER_IMAGE_URL =
  "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1600";

const ImageView = () => {
  return (
    <section className="relative w-full h-[560px] md:h-[640px] overflow-hidden bg-[#090d16]">
      {/* Background image */}
      <img
        src={NEW_BANNER_IMAGE_URL}
        alt={`${company_name} Banner`}
        className="w-full h-full object-cover scale-105 opacity-75"
      />

      {/* Multi-layer obsidian overlay */}
      <div className="absolute inset-0 bg-[#090d16]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/35 to-[#090d16]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#090d16]/75 via-transparent to-[#090d16]/75" />

      {/* Top amber shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

      {/* Center warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-[11px] font-semibold tracking-[0.18em] uppercase mb-6"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <Sparkles size={12} className="text-amber-400" />
          Traditional Mysore Consultation
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-wide leading-tight drop-shadow-lg"
          style={{
            fontFamily: "'Playfair Display', serif",
            background:
              "linear-gradient(95deg, #ffffff 0%, #fef3c7 55%, #fbbf24 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {company_name}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="flex items-center gap-3 mt-4"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400/80" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="mt-5 text-slate-300 text-sm md:text-base leading-relaxed max-w-xs md:max-w-lg font-normal"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Thoughtful Mysore wellness and life consultation designed to bring
          calm clarity, balance, and confident decisions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <a
            href={`tel:${phone_number}`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-[#090d16] bg-gradient-to-r from-amber-200 to-amber-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-400/45 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Phone size={15} /> Call Now
          </a>

          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-xs uppercase tracking-wider text-amber-200 bg-white/5 border border-white/15 hover:bg-amber-500/10 hover:border-amber-400/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageCircle size={15} /> Chat Now
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.55 }}
          className="mt-8 text-[11px] tracking-[0.18em] uppercase text-amber-300/70"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          ✦ Trusted &nbsp;•&nbsp; Confidential &nbsp;•&nbsp; Respectful
        </motion.p>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#090d16] to-transparent pointer-events-none" />
    </section>
  );
};

export default ImageView;