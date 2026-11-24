import { ArrowUpRight, MenuIcon, PhoneCall, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { company_name, phone_number } from "./secrete";

const NEW_LOGO_IMAGE_URL =
  "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTdmfJuzBjdQuOcDPSS_rFeWBgtY2lUJ9kW1ASezqDUexn3tQlW0k33FGvM7GrEH3-5V-MRbyffbgtjV8A";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];
import { createPortal } from "react-dom";

const Header = () => {
  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{
        background:
          "linear-gradient(135deg, rgba(9, 13, 22, 0.94) 0%, rgba(17, 24, 39, 0.92) 50%, rgba(9, 13, 22, 0.96) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(245, 158, 11, 0.18)",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.45)",
      }}
    >
      {/* Top luminous gradient bar */}
      <div
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, #d97706 25%, #fde68a 50%, #d97706 75%, transparent 100%)",
        }}
      />
      <div className="w-full md:w-[92%] mx-auto px-4 py-3.5 md:py-4">
        <Logo />
      </div>
    </header>
  );
};

export default Header;

const Logo = () => {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      {/* Left: Emblem + Brand */}
      <Link
        to="/"
        className="flex items-center gap-4 md:gap-5 group"
        style={{ textDecoration: "none" }}
      >
        {/* Emblem with modern conic halo */}
        <div
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
          style={{
            position: "relative",
            width: "60px",
            height: "60px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-3px",
              borderRadius: "18px",
              background:
                "conic-gradient(from 45deg, #f59e0b, #fef08a, #b45309, #fbbf24, #f59e0b)",
              animation: "spinSlow 10s linear infinite",
              opacity: imgHovered ? 1 : 0.75,
              transition: "opacity 0.3s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "2px",
              borderRadius: "15px",
              background: "#090d16",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "4px",
              borderRadius: "13px",
              overflow: "hidden",
            }}
          >
            <img
              src={NEW_LOGO_IMAGE_URL}
              alt={`${company_name} Emblem`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: imgHovered ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </div>
        </div>

        {/* Brand Typography */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.3rem, 2.7vw, 1.85rem)",
              background:
                "linear-gradient(95deg, #ffffff 0%, #fef3c7 60%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.02em",
              lineHeight: 1.12,
              margin: 0,
            }}
          >
            {company_name}
          </h1>

          {/* Modern Pill Tagline */}
          <div className="flex items-center gap-2">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 600,
                color: "#fbbf24",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              <Sparkles size={11} color="#fbbf24" />
              Mysore Heritage &amp; Consultation
            </span>
          </div>
        </div>
      </Link>

      {/* Right: Navigation */}
      <Menu />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes menuFade {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-3 relative">
      {/* Desktop Glass Pill Nav */}
      <nav
        className="hidden lg:flex items-center gap-1"
        style={{
          background: "rgba(255, 255, 255, 0.035)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "999px",
          padding: "5px 6px",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.label} to={item.path}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Modern Luminous CTA */}
      <Link
        to="/contact"
        className="hidden sm:inline-flex items-center gap-2"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
          color: "#090d16",
          background: "linear-gradient(135deg, #fde68a 0%, #f59e0b 100%)",
          padding: "10px 20px",
          borderRadius: "999px",
          textDecoration: "none",
          boxShadow: "0 4px 20px rgba(245, 158, 11, 0.3)",
          transition: "all 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow =
            "0 6px 26px rgba(245, 158, 11, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 4px 20px rgba(245, 158, 11, 0.3)";
        }}
      >
        <span>Book Consultation</span>
        <ArrowUpRight size={15} strokeWidth={2.5} />
      </Link>

      {/* Mobile menu toggle */}
      <button
        className="lg:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          border: "1px solid rgba(251, 191, 36, 0.3)",
          background: "rgba(251, 191, 36, 0.08)",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        <MenuIcon size={20} color="#fbbf24" strokeWidth={2} />
      </button>

      {open && <MobileMenu setOpen={setOpen} />}
    </div>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.84rem",
        fontWeight: isActive ? 600 : 500,
        letterSpacing: "0.02em",
        color: isActive || hovered ? "#fde68a" : "rgba(241, 245, 249, 0.78)",
        background: isActive
          ? "rgba(245, 158, 11, 0.16)"
          : hovered
            ? "rgba(255, 255, 255, 0.06)"
            : "transparent",
        textDecoration: "none",
        padding: "8px 16px",
        borderRadius: "999px",
        transition: "all 0.22s ease",
        display: "inline-block",
      }}
    >
      {children}
    </Link>
  );
};


const MobileMenu = ({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) => {
  const location = useLocation();

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        zIndex: 9999999,

        background:
          "radial-gradient(circle at top right, #1e293b 0%, #090d16 65%)",

        display: "flex",
        flexDirection: "column",
        padding: "24px",
        boxSizing: "border-box",
        overflowY: "auto",

        animation: "menuFade 0.25s ease",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(251, 191, 36, 0.18)",
          paddingBottom: "18px",
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#fde68a",
          }}
        >
          {company_name}
        </span>

        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            border: "1px solid rgba(251, 191, 36, 0.3)",
            background: "rgba(251, 191, 36, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <X size={18} color="#fbbf24" />
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginTop: "20px",
          padding: 0,
          listStyle: "none",
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <li key={item.label}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "15px 18px",
                  borderRadius: "14px",
                  border: isActive
                    ? "1px solid rgba(251, 191, 36, 0.4)"
                    : "1px solid rgba(255, 255, 255, 0.07)",
                  background: isActive
                    ? "rgba(245, 158, 11, 0.12)"
                    : "rgba(255, 255, 255, 0.03)",
                  color: isActive ? "#fde68a" : "#f1f5f9",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.98rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={17} color="#fbbf24" />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Bottom Call Card */}
      <div
        style={{
          marginTop: "auto",
          padding: "18px",
          borderRadius: "16px",
          border: "1px solid rgba(251, 191, 36, 0.22)",
          background: "rgba(245, 158, 11, 0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(241, 245, 249, 0.6)",
              margin: "0 0 4px 0",
            }}
          >
            Direct Consultation Line
          </p>

          <a
            href={`tel:+91${phone_number}`}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#fde68a",
              textDecoration: "none",
            }}
          >
            +91 {phone_number}
          </a>
        </div>

        <a
          href={`tel:+91${phone_number}`}
          aria-label="Call now"
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #fde68a 0%, #f59e0b 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#090d16",
          }}
        >
          <PhoneCall size={18} />
        </a>
      </div>
    </div>,
    document.body
  );
};
