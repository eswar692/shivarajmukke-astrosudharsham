import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import FAQ from "../Genaral/FAQ";
import {
  company_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secrete";
import ImageView from "../Genaral/VideoView";

const NEW_HOME_IMAGES = {
  problems: [
    "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTdmfJuzBjdQuOcDPSS_rFeWBgtY2lUJ9kW1ASezqDUexn3tQlW0k33FGvM7GrEH3-5V-MRbyffbgtjV8A",
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  about:
    "https://images.pexels.com/photos/5340280/pexels-photo-5340280.jpeg?auto=compress&cs=tinysrgb&w=1200",
  consultation: [
    "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  wellness: [
    "https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  guide:
    "https://i.pinimg.com/736x/96/57/a5/9657a59ba3ac24d8ca485737decf5e61.jpg",
};

const Home = () => {
  return (
    <div
      className="flex flex-col w-full h-full bg-[#090d16] text-slate-100"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <ImageView />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      <AllServicesModern />
      <HomeLastDesign />
      <FAQ />
    </div>
  );
};

export default Home;

/* ── Consultation Areas ── */
const Problems = () => {
  const problems = [
    {
      title: "Relationship Guidance",
      desc: "Traditional consultation for emotional clarity and relationship harmony.",
      img: NEW_HOME_IMAGES.problems[0],
    },
    {
      title: "Marriage Support",
      desc: "Holistic insights for better understanding and marital balance.",
      img: NEW_HOME_IMAGES.problems[1],
    },
    {
      title: "Career Direction",
      desc: "Personalized consultation to navigate career growth and opportunities.",
      img: NEW_HOME_IMAGES.problems[2],
    },
    {
      title: "Education & Focus",
      desc: "Traditional wellness practices to enhance concentration and learning progress.",
      img: NEW_HOME_IMAGES.problems[3],
    },
    {
      title: "Financial Stability",
      desc: "Holistic insights to support financial planning and a positive mindset.",
      img: NEW_HOME_IMAGES.problems[4],
    },
    {
      title: "Family Harmony",
      desc: "Consultation for resolving misunderstandings and improving peace at home.",
      img: NEW_HOME_IMAGES.problems[5],
    },
    {
      title: "Health & Well-being",
      desc: "Traditional guidance to support emotional and mental balance.",
      img: NEW_HOME_IMAGES.problems[6],
    },
    {
      title: "Business Growth",
      desc: "Holistic consultation for strategic planning and growth clarity.",
      img: NEW_HOME_IMAGES.problems[7],
    },
    {
      title: "Life Path Clarity",
      desc: "Discover strengths and direction through traditional Kerala analysis.",
      img: NEW_HOME_IMAGES.problems[8],
    },
    {
      title: "Inner Well-being",
      desc: "Guidance to deepen self-awareness and inner peace.",
      img: NEW_HOME_IMAGES.problems[9],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#090d16] via-[#0e1525] to-[#111827]">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400">
          <Sparkles size={12} /> How We Help
        </span>
        <div className="flex items-center justify-center gap-3 mt-2">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400/70" />
          <h2
            className="text-3xl md:text-4xl font-bold text-white tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Areas of Consultation
          </h2>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400/70" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {problems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
            viewport={{ once: true }}
            className="group bg-[#111827]/90 border border-amber-500/15 rounded-2xl overflow-hidden shadow-xl shadow-black/50 hover:border-amber-400/40 transition-all duration-300"
          >
            <div className="overflow-hidden relative">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
            </div>
            <div className="p-6 text-center">
              <h3
                className="text-lg font-bold text-amber-200 tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                {item.desc}
              </p>
              <a
                href={`https://wa.me/${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-200 to-amber-500 text-[#090d16] shadow-md shadow-amber-500/20 hover:shadow-amber-400/40 hover:-translate-y-0.5 transition-all duration-200"
                aria-label={`WhatsApp us about ${item.title}`}
              >
                <MessageCircle size={14} /> Message Us
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* ── About Practitioner ── */
const AboutAstrologer = () => {
  return (
    <section className="relative py-24 px-6 bg-[#090d16] overflow-hidden border-t border-white/5">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-6 text-center md:text-left">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300 text-xs font-semibold tracking-widest uppercase">
            <Sparkles size={13} /> About {company_name}
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {company_name}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mx-auto md:mx-0" />

          <p className="text-slate-300 leading-relaxed text-base">
            Meet <span className="font-semibold text-white">{company_name}</span>,
            a trusted practitioner whose knowledge is rooted in traditional Kerala
            wisdom. His guidance has helped many individuals discover{" "}
            <span className="font-semibold text-amber-300">
              clarity, balance, and confidence
            </span>
            .
          </p>

          <p className="text-slate-400 leading-relaxed text-base">
            Through personalized consultations and thoughtful insights,{" "}
            {company_name} supports people in navigating life decisions with
            calmness, awareness, and grounded understanding.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-200 to-amber-500 text-[#090d16] shadow-lg shadow-amber-500/25 hover:shadow-amber-400/45 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone size={15} /> Call Now
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-wider bg-white/5 border border-white/15 text-amber-200 hover:bg-amber-500/10 hover:border-amber-400/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle size={15} /> Chat Now
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-amber-400/35 via-amber-500/10 to-transparent blur-xl opacity-75" />
            <img
              src={NEW_HOME_IMAGES.about}
              alt={`${company_name} practitioner`}
              loading="lazy"
              className="relative w-full h-[420px] rounded-3xl object-cover object-top border border-amber-400/20 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Consultation Services ── */
const AstrologyServices = () => {
  const services = [
    {
      title: "Relationship Recovery",
      desc: "Emotional challenges in relationships are common. Traditional consultation helps heal and restore understanding between partners.",
      img: NEW_HOME_IMAGES.consultation[0],
    },
    {
      title: "Partner Conflict Support",
      desc: "Traditional guidance helps ease conflicts and bring balance in relationships with your partner.",
      img: NEW_HOME_IMAGES.consultation[1],
    },
    {
      title: "Relationship Harmony",
      desc: "Holistic consultation provides a path to resolve issues and restore harmony and trust between partners.",
      img: NEW_HOME_IMAGES.consultation[2],
    },
    {
      title: "Family Well-being",
      desc: "Address family challenges with traditional guidance that promotes peace, harmony, and positivity at home.",
      img: NEW_HOME_IMAGES.consultation[3],
    },
  ];

  return (
    <section className="relative py-24 bg-[#111827] overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400">
          Our Specialties
        </span>
        <h2
          className="text-3xl md:text-5xl font-bold text-white tracking-wide mt-2 mb-14"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Consultation Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="group bg-[#090d16]/90 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/35 shadow-xl shadow-black/45 transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-4 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-lg font-bold text-amber-200 tracking-wide"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mt-3">
                    {service.desc}
                  </p>
                </div>
                <a
                  href={`tel:${phone_number}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full mt-3 bg-gradient-to-r from-amber-200 to-amber-500 text-[#090d16] font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 hover:shadow-amber-400/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Phone size={13} /> Call Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Wellness Services ── */
const AstrologyServicesModern = () => {
  const services = [
    {
      title: "Marriage Consultation",
      img: NEW_HOME_IMAGES.wellness[0],
    },
    {
      title: "Couple Conflict Support",
      img: NEW_HOME_IMAGES.wellness[1],
    },
    {
      title: "Relationship Restoration",
      img: NEW_HOME_IMAGES.wellness[2],
    },
    {
      title: "Financial Well-being",
      img: NEW_HOME_IMAGES.wellness[3],
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#090d16] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400">
            Wellness
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-white tracking-wide mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Wellness Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group bg-[#111827] border border-amber-500/15 rounded-2xl overflow-hidden shadow-xl shadow-black/45 hover:border-amber-400/40 transition-all duration-300"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
              </div>
              <div className="p-5 text-center">
                <h3
                  className="text-base font-bold text-amber-200 tracking-wide"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.title}
                </h3>
                <a
                  href={`tel:${phone_number}`}
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-white/5 border border-amber-400/25 text-amber-200 text-xs font-semibold uppercase tracking-wider py-2.5 rounded-full hover:bg-amber-500/15 hover:border-amber-400/50 transition-all duration-200"
                >
                  <Phone size={13} /> Call Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── All Services ── */
const AllServicesModern = () => {
  const services = [
    {
      title: "Relationship Healing",
      icon: Heart,
      desc: "Traditional guidance to restore emotional balance and mutual understanding.",
      accent: "text-rose-300",
      bg: "bg-rose-500/10 border-rose-400/25",
    },
    {
      title: "Legal Matter Support",
      icon: Scale,
      desc: "Traditional insights to support clarity and peace of mind during legal challenges.",
      accent: "text-amber-300",
      bg: "bg-amber-500/10 border-amber-400/25",
    },
    {
      title: "Family Harmony",
      icon: Users,
      desc: "Supportive consultation to improve peace and well-being in family relationships.",
      accent: "text-emerald-300",
      bg: "bg-emerald-500/10 border-emerald-400/25",
    },
    {
      title: "Business Direction",
      icon: Briefcase,
      desc: "Holistic insights to help with planning and professional growth.",
      accent: "text-sky-300",
      bg: "bg-sky-500/10 border-sky-400/25",
    },
    {
      title: "Couple Well-being",
      icon: Users,
      desc: "Guidance focused on emotional well-being and togetherness.",
      accent: "text-pink-300",
      bg: "bg-pink-500/10 border-pink-400/25",
    },
    {
      title: "Traditional Rituals",
      icon: Sparkles,
      desc: "Sacred Kerala practices aimed at inner balance and personal grounding.",
      accent: "text-violet-300",
      bg: "bg-violet-500/10 border-violet-400/25",
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#111827] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400">
            Full Spectrum
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white tracking-wide mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400/70" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group bg-[#090d16]/90 border border-white/10 rounded-2xl p-8 text-center hover:border-amber-400/35 shadow-xl shadow-black/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`mx-auto mb-6 w-16 h-16 rounded-2xl flex items-center justify-center border ${service.bg}`}
                >
                  <service.icon className={`w-8 h-8 ${service.accent}`} />
                </div>

                <h3
                  className="text-xl font-bold text-white tracking-wide mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <a
                href={`tel:${phone_number}`}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-full font-bold text-xs uppercase tracking-wider text-[#090d16] bg-gradient-to-r from-amber-200 to-amber-500 shadow-md shadow-amber-500/20 hover:shadow-amber-400/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Guide Spotlight ── */
function HomeLastDesign() {
  return (
    <section className="relative py-24 px-6 bg-[#090d16] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-amber-400/25 via-amber-500/10 to-transparent blur-2xl" />
            <div className="relative w-72 h-72 md:w-88 md:h-88 rounded-full overflow-hidden border-2 border-amber-400/30 shadow-2xl shadow-black/70">
              <img
                src={NEW_HOME_IMAGES.guide}
                alt={person_name}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-400">
            Meet Your Guide
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {person_name}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mx-auto md:mx-0" />

          <h3 className="text-base md:text-lg font-medium text-amber-100/90 tracking-wide">
            Trusted Traditional Kerala Consultation
          </h3>

          <p className="text-slate-400 leading-relaxed text-sm">
            With deep understanding of{" "}
            <span className="text-amber-300 font-medium">Vastu</span>,{" "}
            <span className="text-amber-200 font-medium">
              horoscope interpretation
            </span>
            , and{" "}
            <span className="text-amber-300 font-medium">
              holistic well-being consultation
            </span>
            , {person_name} provides calm, thoughtful guidance to help
            individuals move forward with clarity and confidence.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-[#090d16] bg-gradient-to-r from-amber-200 to-amber-500 shadow-lg shadow-amber-500/25 hover:shadow-amber-400/45 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone size={15} /> Call Now
            </a>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-wider text-amber-200 bg-white/5 border border-white/15 hover:bg-amber-500/10 hover:border-amber-400/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle size={15} /> Chat on WhatsApp
            </a>
          </div>

          <p className="text-[11px] tracking-[0.16em] uppercase text-amber-300/80 pt-1">
            ✦ Trusted Guidance &nbsp;•&nbsp; Calm Insights &nbsp;•&nbsp;
            Personal Clarity
          </p>
        </motion.div>
      </div>
    </section>
  );
}