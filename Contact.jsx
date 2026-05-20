import { useState } from "react";
import RevealSection from "./RevealSection";
import { Send, Terminal, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size = 16, className }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("IDLE"); // IDLE, SENDING, SENT

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("SENDING");
    // Simulate digital message transmission
    setTimeout(() => {
      setStatus("SENT");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("IDLE"), 4000);
    }, 2000);
  };

  return (
    <RevealSection id="contact" style={{ padding: "80px 24px 100px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Title Divider */}
      <div className="section-divider">
        <h2 style={{ fontFamily: "var(--font-hud)", fontSize: "1.5rem", letterSpacing: "3px", color: "#fff" }}>
          07 // SIGNAL TERMINAL
        </h2>
        <div className="section-divider-node">CONTACT</div>
        <div className="section-divider-line"></div>
        <span style={{ fontFamily: "var(--font-hud)", fontSize: "0.8rem", color: "var(--text-muted)" }}>[通信端末]</span>
      </div>

      {/* Main transmission console */}
      <div className="hud-panel cyber-scanlines glitch-border" style={{ padding: "32px", position: "relative" }}>
        <div className="hud-panel-bottom" />

        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <h3
            style={{
              fontFamily: "var(--font-hud)",
              fontSize: "1.1rem",
              letterSpacing: "2px",
              color: "var(--accent-cyan)",
              textShadow: "var(--neon-glow-cyan)",
            }}
          >
            [ SECURE TRANSMISSION PORTAL ]
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>
            Establish a digital connection link directly to Ajay's terminal.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Grid rows for Name & Email */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="contact-form-grid">
            {/* Name Input */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label
                style={{
                  fontFamily: "var(--font-hud)",
                  fontSize: "0.65rem",
                  color: "var(--text-secondary)",
                  letterSpacing: "1px",
                }}
              >
                &gt;&gt; IDENTITY_NAME [送信者名]
              </label>
              <input
                type="text"
                name="name"
                required
                value={formState.name}
                onChange={handleInputChange}
                placeholder="ENTER NAME..."
                style={inputStyle}
                className="hud-input"
              />
            </div>

            {/* Email Input */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label
                style={{
                  fontFamily: "var(--font-hud)",
                  fontSize: "0.65rem",
                  color: "var(--text-secondary)",
                  letterSpacing: "1px",
                }}
              >
                &gt;&gt; SIGNAL_EMAIL [アドレス]
              </label>
              <input
                type="email"
                name="email"
                required
                value={formState.email}
                onChange={handleInputChange}
                placeholder="ENTER EMAIL..."
                style={inputStyle}
                className="hud-input"
              />
            </div>
          </div>

          {/* Message Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label
              style={{
                fontFamily: "var(--font-hud)",
                fontSize: "0.65rem",
                color: "var(--text-secondary)",
                letterSpacing: "1px",
              }}
            >
              &gt;&gt; MESSAGE_CORE_DATA [通信内容]
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={formState.message}
              onChange={handleInputChange}
              placeholder="COMPILE MESSAGE STREAM..."
              style={{ ...inputStyle, resize: "none" }}
              className="hud-input"
            />
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="hud-btn"
            disabled={status === "SENDING"}
            style={{
              padding: "14px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginTop: "10px",
              cursor: status === "SENDING" ? "not-allowed" : "pointer",
            }}
          >
            {status === "IDLE" && (
              <>
                TRANSMIT_SIGNAL <Send size={14} />
              </>
            )}
            {status === "SENDING" && (
              <>
                TRANSMITTING COORD DATA...
                <div style={spinnerStyle} />
              </>
            )}
            {status === "SENT" && (
              <span style={{ color: "var(--accent-cyan)", textShadow: "var(--neon-glow-cyan)" }}>
                SIGNAL SENT SUCCESSFULLY!
              </span>
            )}
          </button>
        </form>

        {/* Social coordinates */}
        <div style={{ marginTop: "40px", borderTop: "1px dashed rgba(0, 210, 255, 0.15)", paddingTop: "24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-hud)" }}>
              <Terminal size={14} style={{ color: "var(--accent-purple)" }} />
              <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                COORD_LINK:
              </span>
              <a
                href="https://github.com/ajayotaku2-dev"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--accent-blue)",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-blue)")}
              >
                <GithubIcon size={12} /> ajayotaku2-dev <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Glowing Anime Tagline */}
            <div style={{ textAlign: "right" }}>
              <p
                className="text-glow-purple"
                style={{
                  fontFamily: "var(--font-hud)",
                  fontSize: "1.05rem",
                  color: "#fff",
                  letterSpacing: "1px",
                  fontWeight: "700",
                }}
              >
                "Let's build something legendary."
              </p>
              <p
                style={{
                  fontFamily: "var(--font-jp)",
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                  marginTop: "2px",
                }}
              >
                伝説を作ろう。
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hud-input {
          transition: all 0.3s ease !important;
        }
        .hud-input:hover {
          border-color: rgba(0, 210, 255, 0.5) !important;
        }
        .hud-input:focus {
          outline: none;
          border-color: var(--accent-purple) !important;
          box-shadow: var(--neon-glow-purple) !important;
          background: rgba(2, 4, 8, 0.8) !important;
        }
        @media (max-width: 600px) {
          .contact-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </RevealSection>
  );
};

const inputStyle = {
  fontFamily: "var(--font-body)",
  fontSize: "0.9rem",
  background: "rgba(2, 4, 8, 0.6)",
  border: "1px solid rgba(0, 210, 255, 0.25)",
  color: "var(--text-primary)",
  padding: "12px 16px",
  borderRadius: "4px",
  width: "100%",
};

const spinnerStyle = {
  width: "14px",
  height: "14px",
  border: "2px solid rgba(255, 255, 255, 0.1)",
  borderTop: "2px solid #fff",
  borderRadius: "50%",
  animation: "spin-hud 1s linear infinite",
};

export default Contact;
