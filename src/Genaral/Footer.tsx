import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ChevronRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import useInViewOnce from "./InView";
import {
  company_name,
  person_name,
  phone_number,
  website_url,
  whatsapp_number,
} from "./secrete";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.2);

  return (
    <motion.footer
      className="bg-[#090d16] relative w-full overflow-hidden text-slate-100 z-[50] border-t border-amber-500/15"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Top shimmer line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />

      {/* Ambient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main content grid */}
      <motion.div
        ref={ref}
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* ── ABOUT ── */}
        <div className="flex flex-col gap-4">
          <SectionLabel>About Us</SectionLabel>
          <h2
            className="text-2xl font-bold tracking-wide leading-snug"
            style={{
              fontFamily: "'Playfair Display', serif",
              background:
                "linear-gradient(95deg, #ffffff 0%, #fef3c7 60%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {company_name}
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
          <p className="text-sm leading-relaxed text-slate-400">
            <span className="text-white font-semibold">{company_name}</span>{" "}
            offers traditional mysore wellness consultations rooted in years of
            experience and responsible practice.{" "}
            <span className="text-amber-300 font-semibold">{person_name}</span>{" "}
            provides thoughtful sessions focused on clarity, balance, and
            personal well-being across relationships, career, and life planning.
          </p>
          <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-amber-300/80 mt-1">
            <Sparkles size={12} className="text-amber-400" />
            Trusted &nbsp;•&nbsp; Confidential &nbsp;•&nbsp; Respectful
          </p>
        </div>

        {/* ── CONTACT ── */}
        <div className="flex flex-col gap-4">
          <SectionLabel>Contact</SectionLabel>
          <h2
            className="text-2xl font-bold text-white tracking-wide leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get in Touch
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />

          <div className="flex flex-col gap-3 mt-1">
            <ContactRow
              icon={
                <Phone size={15} className="text-amber-400 mt-0.5 shrink-0" />
              }
            >
              <a
                href={`tel:${phone_number}`}
                className="text-slate-300 hover:text-amber-200 text-sm tracking-wide transition-colors"
              >
                +91 {phone_number}
              </a>
            </ContactRow>

            <ContactRow
              icon={
                <MessageCircle
                  size={15}
                  className="text-amber-400 mt-0.5 shrink-0"
                />
              }
            >
              <a
                href={`https://wa.me/${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-200 text-sm tracking-wide transition-colors"
              >
                +91 {whatsapp_number}
              </a>
            </ContactRow>
          </div>

          <a
            href={`tel:${phone_number}`}
            className="mt-2 inline-flex items-center gap-2 w-fit px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-200 to-amber-500 text-[#090d16] text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-400/45 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Phone size={13} /> Call Us Today
          </a>
        </div>

        {/* ── POLICIES ── */}
        <div className="flex flex-col gap-4">
          <SectionLabel>Legal</SectionLabel>
          <h2
            className="text-2xl font-bold text-white tracking-wide leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Support &amp; Policies
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />

          <ul className="flex flex-col gap-1.5 mt-1">
            {[
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Terms & Conditions", to: "/terms" },
              { label: "Contact Us", to: "/contact" },
            ].map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm text-slate-400 border border-transparent hover:text-amber-200 hover:bg-amber-500/10 hover:border-amber-400/25 transition-all duration-200"
                >
                  <ChevronRight size={14} className="text-amber-400/70" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <CopyRightAndContact />
    </motion.footer>
  );
}

/* ── Reusable sub-components ── */

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <div className="w-4 h-px bg-gradient-to-r from-amber-400 to-transparent" />
    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400">
      {children}
    </span>
  </div>
);

const ContactRow = ({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3">
    {icon}
    <div>{children}</div>
  </div>
);

const CopyRightAndContact = () => (
  <div className="border-t border-white/10 bg-[#060910]">
    <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Left — dev credit */}
      <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
        <span className="text-xs text-slate-400 tracking-wide">
          Designed &amp; Developed by
        </span>
        <a
          href="https://wa.me/918886921826?text=Hello%2C%20I%20found%20your%20contact%20via%20the%20website"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Eswar on WhatsApp"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-200 to-amber-500 text-[#090d16] text-xs font-bold tracking-wide shadow-md shadow-amber-500/20 hover:shadow-amber-400/45 hover:scale-105 transition-all duration-200"
        >
          Eswar <ExternalLink size={11} />
        </a>
      </div>

      {/* Right — copyright */}
      <p className="text-xs text-slate-400 tracking-wide text-center md:text-right">
        © {new Date().getFullYear()}{" "}
        <a
          href={website_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-300 font-semibold hover:text-amber-200 transition-colors duration-200"
        >
          {company_name}
        </a>{" "}
        – All Rights Reserved
      </p>
    </div>
  </div>
);