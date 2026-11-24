import {
  phone_number,
  whatsapp_number,
  person_name,
  company_name,
} from "../Genaral/secrete";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Star,
  Award,
  Users,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Star,
      label: "Years of Experience",
      value: "40+",
      accent: "text-amber-300",
      bg: "bg-amber-500/10 border-amber-400/25",
    },
    {
      icon: Users,
      label: "Clients Guided",
      value: "50000+",
      accent: "text-emerald-300",
      bg: "bg-emerald-500/10 border-emerald-400/25",
    },
    {
      icon: Award,
      label: "Heritage Practice",
      value: "India",
      accent: "text-sky-300",
      bg: "bg-sky-500/10 border-sky-400/25",
    },
    {
      icon: BookOpen,
      label: "Consultation Areas",
      value: "60+",
      accent: "text-violet-300",
      bg: "bg-violet-500/10 border-violet-400/25",
    },
  ];

  return (
    <section
      className="min-h-screen bg-[#090d16] text-slate-100 py-24 px-6 overflow-hidden relative"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400">
            <Sparkles size={12} /> Our Story
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white tracking-wide mt-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About{" "}
            <span
              style={{
                background:
                  "linear-gradient(95deg, #fef3c7 0%, #fbbf24 100%)",
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
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map(({ icon: Icon, label, value, accent, bg }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-[#111827]/90 shadow-xl shadow-black/40 hover:border-amber-400/35 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center border ${bg}`}
              >
                <Icon size={19} className={accent} />
              </div>
              <span
                className={`text-2xl md:text-3xl font-bold ${accent}`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {value}
              </span>
              <span className="text-slate-400 text-xs text-center tracking-wide font-medium">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22 }}
          className="bg-[#111827]/90 border border-amber-500/15 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/60"
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mb-10" />

          <div className="space-y-6 text-slate-300 text-base leading-relaxed">
            <p>
              <span
                className="font-bold text-amber-200 text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {person_name}
              </span>{" "}
              is a trusted and respected traditional Mysore practitioner with
              decades of experience. Grounded in authentic mysore heritage and a
              genuine commitment to helping others, he provides calm, reliable
              guidance to individuals and families across India.
            </p>

            <div className="w-14 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />

            <p>
              Through his extensive experience and thoughtful approach,{" "}
              <span className="font-semibold text-white">{person_name}</span>{" "}
              offers personalized consultations covering horoscope reading,
              Vastu guidance, palmistry, and direct phone sessions. His work
              bridges traditional Mysore wisdom with practical clarity for
              personal well-being and life decisions.
            </p>

            <div className="w-14 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />

            <p>
              Known for his{" "}
              <span className="font-semibold text-amber-300">
                calm clarity and grounded insights
              </span>
              , <span className="font-semibold text-white">{person_name}</span>{" "}
              has earned the trust of clients who value thoughtful direction
              and confidence in every stage of life.
            </p>

            <div className="w-14 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />

            <p className="text-slate-400">
              If you are seeking experienced, respectful consultation tailored
              to your path, we welcome you to connect with us directly.
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent mt-10 mb-8" />

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
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
              <MessageCircle size={15} /> Chat on WhatsApp
            </a>
          </div>

          <p className="text-center text-[11px] tracking-[0.18em] uppercase text-amber-300/70 mt-6">
            ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp;
            Personal Clarity
          </p>
        </motion.div>
      </div>
    </section>
  );
}