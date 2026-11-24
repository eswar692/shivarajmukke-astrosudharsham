import { Phone, MessageCircle, Sparkles } from "lucide-react";
import Form from "../Genaral/Form";
import {
  company_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      className="bg-[#090d16] text-slate-100 min-h-screen py-24 px-6 relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400">
          <Sparkles size={12} /> Reach Out
        </span>
        <h2
          className="text-4xl md:text-5xl font-bold text-white tracking-wide mt-3 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact{" "}
          <span
            style={{
              background: "linear-gradient(95deg, #fef3c7 0%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {company_name}
          </span>
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400/70" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400/70" />
        </div>
        <p className="text-slate-400 mt-5 text-sm leading-relaxed max-w-xl mx-auto">
          We are here to support you on your personal journey. Reach out via{" "}
          <span className="font-semibold text-amber-300">WhatsApp</span>,{" "}
          <span className="font-semibold text-amber-300">Phone</span>, or submit
          the form below to schedule a direct consultation.
        </p>
      </motion.div>

      {/* Grid: Info + Form */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Contact Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="bg-[#111827]/90 border border-amber-500/15 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/50 flex flex-col gap-6"
        >
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400">
              Direct Channels
            </span>
            <h3
              className="text-2xl font-bold text-white mt-2 tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mt-3" />
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            Whether you are seeking clarity around{" "}
            <span className="text-amber-300 font-medium">career</span>,{" "}
            <span className="text-amber-300 font-medium">relationships</span>,
            or{" "}
            <span className="text-amber-300 font-medium">life planning</span>,
            our personalized sessions are designed to guide you forward.
          </p>

          {/* Phone */}
          <a
            href={`tel:${phone_number}`}
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#090d16]/90 border border-white/10 hover:bg-amber-500/10 hover:border-amber-400/35 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber-500/10 border border-amber-400/25 shrink-0">
              <Phone size={16} className="text-amber-300" />
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-semibold tracking-widest uppercase">
                Phone Consultation
              </p>
              <p className="text-white text-sm font-semibold group-hover:text-amber-200 transition-colors mt-0.5">
                +91 {phone_number}
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#090d16]/90 border border-white/10 hover:bg-amber-500/10 hover:border-amber-400/35 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber-500/10 border border-amber-400/25 shrink-0">
              <MessageCircle size={16} className="text-amber-300" />
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-semibold tracking-widest uppercase">
                WhatsApp Support
              </p>
              <p className="text-white text-sm font-semibold group-hover:text-amber-200 transition-colors mt-0.5">
                +91 {whatsapp_number}
              </p>
            </div>
          </a>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-[#090d16] bg-gradient-to-r from-amber-200 to-amber-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-400/45 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone size={14} /> Call Now
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-wider text-amber-200 bg-white/5 border border-white/15 hover:bg-amber-500/10 hover:border-amber-400/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle size={14} /> Chat Now
            </a>
          </div>

          <p className="text-[11px] tracking-[0.16em] uppercase text-amber-300/70">
            ✦ Trusted &nbsp;•&nbsp; Confidential &nbsp;•&nbsp; Respectful
          </p>
        </motion.div>

        {/* Form Panel */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="bg-[#111827]/90 border border-amber-500/15 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/50"
        >
          <div className="mb-8">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400">
              Appointment Request
            </span>
            <h3
              className="text-2xl font-bold text-white mt-2 tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Book a Session
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mt-3" />
          </div>
          <Form />
        </motion.div>
      </div>

      {/* Services Info */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        className="mt-20 max-w-5xl mx-auto relative z-10"
      >
        <div className="bg-[#111827]/90 border border-amber-500/15 rounded-3xl p-8 md:p-12 shadow-xl shadow-black/40 text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mb-8" />

          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400">
            What We Offer
          </span>
          <h3
            className="text-3xl md:text-4xl font-bold text-white tracking-wide mt-3 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Consultation Services
          </h3>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Offering detailed{" "}
            <span className="text-amber-300 font-medium">
              palmistry sessions
            </span>
            ,{" "}
            <span className="text-amber-300 font-medium">
              horoscope analysis
            </span>
            ,{" "}
            <span className="text-amber-300 font-medium">
              personal well-being reviews
            </span>
            , and{" "}
            <span className="text-amber-300 font-medium">
              Vastu consultations
            </span>
            . Gain clarity and direction through personalized traditional Mysore
            insights into{" "}
            <span className="text-white font-semibold">
              relationships, career, financial planning, and personal well-being
            </span>
            .
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mt-8" />
        </div>
      </motion.div>
    </div>
  );
}