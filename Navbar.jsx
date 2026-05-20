import { useState, useEffect } from "react";
import { Terminal, Shield, Cpu, Activity, Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSec, setActiveSec] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [xp, setXp] = useState(0);

  // Animate XP loading bar on load
  useEffect(() => {
    const interval = setTimeout(() => {
      setXp(100);
    }, 500);
    return () => clearTimeout(interval);
  }, []);

  const navItems = [
    { id: "hero", name: "HOME", num: "01" },
    { id: "about", name: "PROFILE", num: "02" },
    { id: "skills", name: "ABILITIES", num: "03" },
    { id: "projects", name: "QUESTS", num: "04" },
    { id: "education", name: "LOGS", num: "05" },
    { id: "contact", name: "TERMINAL", num: "06" },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSec(item.id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSec(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(2, 4, 8, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0, 210, 255, 0.2)",
        padding: "12px 24px",
      }}
      className="cyber-scanlines"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side: Terminal Name */}
        <div
          onClick={() => handleNavClick("hero")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            fontFamily: "var(--font-hud)",
            fontSize: "1.1rem",
            fontWeight: "700",
            letterSpacing: "1px",
            color: "var(--text-primary)",
          }}
        >
          <Terminal size={18} className="text-glow-blue" style={{ color: "var(--accent-blue)" }} />
          <span style={{ color: "var(--accent-blue)" }}>AJAY</span>
          <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>//</span>
          <span style={{ fontSize: "0.8rem", color: "var(--accent-purple)", letterSpacing: "2px" }}>HUD_v1.0</span>
        </div>

        {/* Center: RPG Level & XP Bar - Hidden on small mobile, beautiful on tablet+ */}
        <div
          className="xp-hud-container"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontFamily: "var(--font-hud)",
            fontSize: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Shield size={14} style={{ color: "var(--accent-cyan)" }} />
            <span style={{ color: "var(--accent-cyan)" }}>LV.01</span>
          </div>
          <div style={{ width: "120px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2px", color: "var(--text-secondary)" }}>
              <span>XP BAR</span>
              <span>{xp}%</span>
            </div>
            <div className="hud-bar-container">
              <div
                className="hud-bar-fill"
                style={{ width: `${xp}%` }}
              ></div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Activity size={12} style={{ color: "var(--accent-purple)", animation: "pulse 2s infinite" }} />
            <span style={{ color: "var(--text-secondary)" }}>STATUS: OK</span>
          </div>
        </div>

        {/* Right Side: Web Nav Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            className="nav-links-desktop"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-hud)",
                  fontSize: "0.75rem",
                  letterSpacing: "2px",
                  color: activeSec === item.id ? "var(--accent-cyan)" : "var(--text-secondary)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  padding: "6px 4px",
                }}
              >
                <span style={{ color: "var(--text-muted)", marginRight: "4px", fontSize: "0.6rem" }}>
                  {item.num}
                </span>
                {item.name}
                {activeSec === item.id && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "2px",
                      background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-blue))",
                      boxShadow: "0 0 8px var(--accent-cyan)",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Sound / Visualizer graphic accent */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "2px",
              height: "16px",
              width: "24px",
              paddingBottom: "2px",
            }}
          >
            {[1, 2, 3, 4, 5].map((bar) => (
              <div
                key={bar}
                style={{
                  width: "3px",
                  backgroundColor: "var(--accent-blue)",
                  borderRadius: "1px",
                  height: "100%",
                  transformOrigin: "bottom",
                  animation: `equalizer ${0.5 + bar * 0.15}s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile-toggle"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)",
              display: "none",
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="cyber-scanlines"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "rgba(2, 4, 8, 0.95)",
            borderBottom: "1px solid rgba(0, 210, 255, 0.2)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: "transparent",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "var(--font-hud)",
                fontSize: "0.85rem",
                letterSpacing: "2px",
                color: activeSec === item.id ? "var(--accent-cyan)" : "var(--text-secondary)",
                padding: "8px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <span style={{ color: "var(--accent-blue)", marginRight: "12px" }}>[{item.num}]</span>
              {item.name}
            </button>
          ))}
        </div>
      )}

      {/* Injecting Nav CSS directly to handle media queries and equalizer */}
      <style>{`
        @media (max-width: 820px) {
          .xp-hud-container {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: block !important;
          }
        }
        @keyframes equalizer {
          0% { transform: scaleY(0.2); }
          100% { transform: scaleY(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
