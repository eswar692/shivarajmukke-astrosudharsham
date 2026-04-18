import { phone_number, whatsapp_number, company_name } from "./secrete";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ImageView = () => {
  return (
    <div className="relative w-full h-[560px] md:h-[620px] overflow-hidden">
      {/* Background image */}
      <img
        src="https://i.pinimg.com/736x/11/a3/af/11a3af08a74e52eb3f5bad010218fa28.jpg"
        alt={`${company_name} Banner`}
        className="w-full h-full object-cover scale-105"
      />

      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-[#0d1b2a]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/60 via-transparent to-[#0d1b2a]/60" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#c9956c_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Rose-gold top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9956c] to-transparent opacity-60" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#c9956c]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
          bg-[#c9956c]/10 border border-[#c9956c]/25
          text-[#c9956c] text-[10px] font-semibold tracking-[0.2em] uppercase mb-6"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          ✦ Traditional Kerala Consultation
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-wide leading-tight drop-shadow-lg"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {company_name}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex items-center gap-3 mt-4"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9956c]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#c9956c]" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9956c]" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 text-[#94a3b8] text-sm md:text-base leading-relaxed max-w-xs md:max-w-lg font-light tracking-wide"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Trusted Kerala practitioner offering personalized consultations for
          clarity, well-being, and confident life decisions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href={`tel:${phone_number}`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md
            font-semibold text-sm text-white
            bg-gradient-to-r from-[#c9956c] to-[#e8b89a]
            shadow-lg shadow-[#c9956c]/25
            hover:shadow-[#c9956c]/50 hover:-translate-y-0.5
            transition-all duration-200"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            <Phone size={15} /> Call Now
          </a>

          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-md
            font-semibold text-sm text-white
            bg-white/5 border border-white/15
            hover:bg-white/10 hover:border-[#c9956c]/30 hover:-translate-y-0.5
            transition-all duration-200"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            <MessageCircle size={15} /> Chat Now
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 text-[10px] tracking-[0.2em] uppercase text-[#c9956c]/50"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          ✦ Trusted &nbsp;•&nbsp; Confidential &nbsp;•&nbsp; Respectful
        </motion.p>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0d1b2a] to-transparent" />
    </div>
  );
};

export default ImageView;
