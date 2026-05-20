import { useState, useEffect } from "react";
import ParticleBg from "./ParticleBg";
import { ArrowRight, MessageSquare, ShieldAlert } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Parallax mouse offsets
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const words = [
    "Full Stack Developer",
    "CSE Student @ VVCE",
    "Anime Enthusiast",
    "Game Dev Explorer",
  ];

  // Typewriter core loop
  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting;

      if (!shouldDelete) {
        // Typing letters
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(100);

        if (text === currentWord) {
          // Finished typing, pause
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting letters
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(50);

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  // Track mouse coordinates for background parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 25;
      const y = (clientY - window.innerHeight / 2) / 25;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "var(--bg-darker)",
      }}
    >
      {/* Background connecting particle nodes */}
      <ParticleBg />

      {/* Decorative Parallax HUD Vector Circular Canvas */}
      <div
        className="floating-hud"
        style={{
          position: "absolute",
          width: "550px",
          height: "550px",
          zIndex: 1,
          opacity: 0.15,
          pointerEvents: "none",
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <svg
          viewBox="0 0 200 200"
          width="100%"
          height="100%"
          style={{ color: "var(--accent-blue)" }}
        >
          {/* Rotating spell circle or HUD scope */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4,4"
          />
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="var(--accent-purple)"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="40,10,5,10"
            style={{
              transformOrigin: "center",
              animation: "spin-hud 30s linear infinite",
            }}
          />
          <path
            d="M 20 100 H 180 M 100 20 V 180"
            stroke="var(--accent-cyan)"
            strokeWidth="0.25"
          />
          <circle cx="100" cy="100" r="3" fill="var(--accent-cyan)" />
        </svg>
      </div>

      {/* Corner borders for landing canvas */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          bottom: "40px",
          left: "40px",
          right: "40px",
          border: "1px solid rgba(0, 210, 255, 0.05)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "20px", height: "20px", borderTop: "2px solid var(--accent-blue)", borderLeft: "2px solid var(--accent-blue)" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "20px", height: "20px", borderTop: "2px solid var(--accent-blue)", borderRight: "2px solid var(--accent-blue)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "20px", height: "20px", borderBottom: "2px solid var(--accent-purple)", borderLeft: "2px solid var(--accent-purple)" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "20px", height: "20px", borderBottom: "2px solid var(--accent-purple)", borderRight: "2px solid var(--accent-purple)" }} />
      </div>

      {/* HUD Text Content */}
      <div
        style={{
          zIndex: 10,
          textAlign: "center",
          maxWidth: "800px",
          padding: "0 24px",
        }}
      >
        {/* Top digital greeting */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.75rem",
            fontFamily: "var(--font-hud)",
            color: "var(--accent-cyan)",
            textTransform: "uppercase",
            letterSpacing: "4px",
            border: "1px solid rgba(0, 255, 196, 0.2)",
            background: "rgba(0, 255, 196, 0.05)",
            padding: "6px 12px",
            marginBottom: "24px",
            borderRadius: "2px",
          }}
        >
          <ShieldAlert size={12} />
          <span>[ STABLE_LINK // ONLINE ]</span>
        </div>

        {/* Glitch Animated Name */}
        <h1 style={{ margin: "12px 0 20px" }}>
          <div className="glitch-wrapper">
            <span
              className="glitch-text"
              data-text="AJAY"
              style={{ fontSize: "5rem", letterSpacing: "8px" }}
            >
              AJAY
            </span>
          </div>
        </h1>

        {/* Typewriter Subtitle */}
        <div
          style={{
            fontFamily: "var(--font-hud)",
            fontSize: "1.5rem",
            color: "var(--text-secondary)",
            letterSpacing: "2px",
            minHeight: "40px",
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>
            {text}
            <span
              style={{
                color: "var(--accent-blue)",
                marginLeft: "4px",
                animation: "blink-cursor 0.75s step-end infinite",
              }}
            >
              |
            </span>
          </span>
        </div>

        {/* Action Panel Buttons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => handleScrollTo("projects")}
            className="hud-btn"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            VIEW PROJECTS <ArrowRight size={16} />
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="hud-btn hud-btn-purple"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            CONTACT ME <MessageSquare size={16} />
          </button>
        </div>
      </div>

      {/* Decorative Bottom Scrolling Indicator */}
      <div
        onClick={() => handleScrollTo("about")}
        style={{
          position: "absolute",
          bottom: "30px",
          cursor: "pointer",
          zIndex: 10,
          fontFamily: "var(--font-hud)",
          fontSize: "0.65rem",
          letterSpacing: "4px",
          color: "var(--text-muted)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
      >
        <span>SCROLL DOWN</span>
        <div
          style={{
            width: "2px",
            height: "40px",
            background: "linear-gradient(180deg, var(--accent-cyan), transparent)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "10px",
              background: "#fff",
              boxShadow: "0 0 8px #fff",
              animation: "scroll-dot 2s linear infinite",
            }}
          />
        </div>
      </div>

      {/* Hero CSS Keyframe Overrides */}
      <style>{`
        @keyframes spin-hud {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes blink-cursor {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scroll-dot {
          0% { transform: translateY(-10px); }
          100% { transform: translateY(40px); }
        }
        @media (max-width: 768px) {
          .glitch-text {
            font-size: 3.5rem !important;
          }
          .floating-hud {
            width: 320px !important;
            height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
