import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { person_name, phone_number } from "./secrete";

const faqs = [
  {
    question: `Can We Meet ${person_name} in Person?`,
    answer: `Yes, in-person sessions are available with prior appointment. 📲 WhatsApp: ${phone_number}`,
  },
  {
    question: "Is Phone Consultation Available?",
    answer: `Yes, you can connect via phone from anywhere in India. 📞 Phone: ${phone_number}`,
  },
  {
    question: "What Kind of Consultation Services Are Available?",
    answer:
      "We provide Vastu, horoscope reading, career planning, marriage support, health well-being, and business direction consultations.",
  },
  {
    question: "What Kind of Products Are Available?",
    answer:
      "Traditional Kerala wellness products, gemstones, and well-being items are available.",
  },
  {
    question: "Are Learning Sessions Offered?",
    answer:
      "Yes, traditional knowledge learning sessions are offered for different levels.",
  },
  {
    question: "What Is Covered in the Learning Sessions?",
    answer:
      "We cover horoscope reading, palmistry basics, and traditional Kerala knowledge practices.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 bg-[#1b2a3b] text-white overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#c9956c_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      {/* Glows */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#c9956c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#1b3a5c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span
            className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#c9956c]"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Got Questions?
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white tracking-wide mt-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Frequently Asked <span className="text-[#c9956c]">Questions</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9956c]" />
            <div className="w-2 h-2 rounded-full bg-[#c9956c]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9956c]" />
          </div>
          <p
            className="text-[#94a3b8] mt-5 text-sm font-light max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Clear answers to help you understand our consultation process.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border overflow-hidden transition-all duration-300
                  ${
                    isOpen
                      ? "bg-[#243447] border-[#c9956c]/25 shadow-lg shadow-[#c9956c]/5"
                      : "bg-[#0d1b2a] border-white/5 hover:border-white/10"
                  }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left gap-4"
                >
                  <span
                    className={`text-base md:text-lg font-medium tracking-wide transition-colors duration-200
                    ${isOpen ? "text-[#c9956c]" : "text-zinc-200 hover:text-white"}`}
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-md flex items-center justify-center border transition-all duration-300
                    ${
                      isOpen
                        ? "bg-[#c9956c]/10 border-[#c9956c]/30 rotate-180"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <ChevronDown
                      size={15}
                      className={isOpen ? "text-[#c9956c]" : "text-zinc-400"}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-[#c9956c]/30 to-transparent mb-4" />
                    <p
                      className="text-[#94a3b8] text-sm leading-relaxed font-light"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
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
            href={`https://wa.me/${phone_number}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="inline-flex items-center gap-3
            px-8 py-3.5 rounded-md font-semibold text-sm text-white
            bg-gradient-to-r from-[#c9956c] to-[#e8b89a]
            shadow-lg shadow-[#c9956c]/20
            hover:shadow-[#c9956c]/40 hover:-translate-y-0.5
            transition-all duration-200"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            <MessageCircle size={17} />
            Chat With Us
          </a>
        </div>

        <p
          className="text-center text-[10px] tracking-[0.18em] uppercase text-[#c9956c]/50 mt-8"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp; Personal
          Clarity
        </p>
      </div>
    </section>
  );
}
