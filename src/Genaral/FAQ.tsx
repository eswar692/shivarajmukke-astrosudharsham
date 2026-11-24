import { useState } from "react";
import { ChevronDown, MessageCircle, Sparkles } from "lucide-react";
import { person_name, phone_number, whatsapp_number } from "./secrete";

const faqs = [
  {
    question: `Can We Meet ${person_name} in Person?`,
    answer: `Yes, in-person sessions are available with prior appointment. WhatsApp: +91 ${phone_number}`,
  },
  {
    question: "Is Phone Consultation Available?",
    answer: `Yes, you can connect via phone from anywhere in India. Phone: +91 ${phone_number}`,
  },
  {
    question: "What Kind of Consultation Services Are Available?",
    answer:
      "We provide Vastu, horoscope reading, career planning, marriage support, health well-being, and business direction consultations.",
  },
  {
    question: "What Kind of Products Are Available?",
    answer:
      "Traditional Mysore wellness products, gemstones, and well-being items are available.",
  },
  {
    question: "Are Learning Sessions Offered?",
    answer:
      "Yes, traditional knowledge learning sessions are offered for different levels.",
  },
  {
    question: "What Is Covered in the Learning Sessions?",
    answer:
      "We cover horoscope reading, palmistry basics, and traditional mysore knowledge practices.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-24 px-6 bg-[#111827] text-slate-100 overflow-hidden border-t border-white/5"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Subtle ambient glows */}
      <div className="absolute top-12 left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400">
            <Sparkles size={12} /> Got Questions?
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white tracking-wide mt-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked{" "}
            <span
              style={{
                background:
                  "linear-gradient(95deg, #fef3c7 0%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Questions
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400/70" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>
          <p className="text-slate-400 mt-5 text-sm leading-relaxed max-w-md mx-auto">
            Clear answers to help you understand how consultations, guidance, and
            sessions work.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-[#192338] border-amber-400/35 shadow-xl shadow-black/40"
                    : "bg-[#090d16]/90 border-white/10 hover:border-amber-400/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-between items-center px-6 py-5 text-left gap-4 cursor-pointer"
                >
                  <span
                    className={`text-base md:text-lg font-semibold tracking-wide transition-colors duration-200 ${
                      isOpen
                        ? "text-amber-200"
                        : "text-slate-100 hover:text-amber-200"
                    }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "bg-amber-500/15 border-amber-400/40 rotate-180"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <ChevronDown
                      size={16}
                      className={isOpen ? "text-amber-300" : "text-slate-400"}
                    />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-amber-400/30 to-transparent mb-4" />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href={`https://wa.me/${whatsapp_number}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-[#090d16] bg-gradient-to-r from-amber-200 to-amber-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-400/45 hover:-translate-y-0.5 transition-all duration-200"
          >
            <MessageCircle size={17} />
            Chat With Us
          </a>
        </div>

        <p className="text-center text-[11px] tracking-[0.18em] uppercase text-amber-300/70 mt-8">
          ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp; Personal
          Clarity
        </p>
      </div>
    </section>
  );
}