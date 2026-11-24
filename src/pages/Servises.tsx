import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { phone_number, whatsapp_number } from "../Genaral/secrete";
import { motion } from "framer-motion";

const services = [
  {
    name: "Relationship Support",
    desc: "Consultation for understanding, rebuilding trust, and strengthening personal relationships.",
    img: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Marriage Consultation",
    desc: "Guidance for a balanced married life, compatibility understanding, and conflict resolution.",
    img: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Legal Matter Support",
    desc: "Traditional insights to support clarity and peace of mind during legal challenges.",
    img: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Financial Well-being",
    desc: "Holistic consultation for wealth planning, investment direction, and financial stability.",
    img: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Education Guidance",
    desc: "Traditional consultation support for students seeking focus, confidence, and academic progress.",
    img: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Career Growth",
    desc: "Clarity for job opportunities, professional direction, and career advancement.",
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    name: "Life Path Consultation",
    desc: "In-depth horoscope reading to understand personal strengths and plan life decisions confidently.",
    img: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Services() {
  return (
    <div
      className="relative bg-[#090d16] text-slate-100 min-h-screen py-24 px-6 overflow-hidden"
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
          <Sparkles size={12} /> What We Offer
        </span>
        <h2
          className="text-4xl md:text-5xl font-bold text-white tracking-wide mt-3 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our{" "}
          <span
            style={{
              background: "linear-gradient(95deg, #fef3c7 0%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Consultation
          </span>{" "}
          Services
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400/70" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400/70" />
        </div>
        <p className="text-slate-400 mt-5 text-sm md:text-base leading-relaxed">
          Explore our services designed to guide you with{" "}
          <span className="font-semibold text-amber-300">wisdom</span>,{" "}
          <span className="font-semibold text-amber-200">peace</span>, and{" "}
          <span className="font-semibold text-amber-300">clarity</span> in life.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10">
        {services.map((service, idx) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
            viewport={{ once: true }}
            className="group bg-[#111827]/90 border border-amber-500/15 rounded-3xl overflow-hidden shadow-xl shadow-black/50 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.img}
                alt={service.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/35 to-transparent" />

              {/* Name badge over image */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-4">
                <h3
                  className="text-xl font-bold text-amber-200 tracking-wide drop-shadow-md"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.name}
                </h3>
                <div className="w-10 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mt-2" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-1 gap-5">
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 pt-1">
                <a
                  href={`tel:${phone_number}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-200 to-amber-500 text-[#090d16] text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full shadow-md shadow-amber-500/20 hover:shadow-amber-400/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Phone size={13} /> Call Now
                </a>
                <a
                  href={`https://wa.me/${whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp us about ${service.name}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white/5 border border-white/15 text-amber-200 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-full hover:bg-amber-500/10 hover:border-amber-400/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MessageCircle size={13} /> Message
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-[11px] tracking-[0.2em] uppercase text-amber-300/70 mt-16 relative z-10"
      >
        ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp; Personal
        Clarity
      </motion.p>
    </div>
  );
}