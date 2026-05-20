import RevealSection from "./RevealSection";
import { GraduationCap, Landmark, CheckSquare, Bookmark, Compass } from "lucide-react";

const Education = () => {
  const objectives = [
    { num: "01", text: "Acquire intermediate memory-addressing structures and pointer mapping in C and Python systems." },
    { num: "02", text: "Formulate modular, non-blocking asynchronous REST pipelines using the React + Express stack." },
    { num: "03", text: "Deconstruct computational logic constraints, discrete structures, and algorithms." },
  ];

  return (
    <RevealSection id="education" style={{ padding: "60px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Section Divider */}
      <div className="section-divider">
        <h2 style={{ fontFamily: "var(--font-hud)", fontSize: "1.5rem", letterSpacing: "3px", color: "#fff" }}>
          06 // EDUCATION LOGS
        </h2>
        <div className="section-divider-node">MAIN STORY</div>
        <div className="section-divider-line"></div>
        <span style={{ fontFamily: "var(--font-hud)", fontSize: "0.8rem", color: "var(--text-muted)" }}>[学歴データ]</span>
      </div>

      {/* Main Quest Education Card */}
      <div
        className="hud-panel cyber-scanlines glitch-border"
        style={{
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          background: "linear-gradient(135deg, rgba(8, 15, 30, 0.8) 0%, rgba(2, 4, 8, 0.9) 100%)",
        }}
      >
        <div className="hud-panel-bottom" />

        {/* Card Header Info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            fontFamily: "var(--font-hud)",
            fontSize: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--accent-cyan)" }}>
            <Compass size={14} />
            <span style={{ textShadow: "var(--neon-glow-cyan)" }}>[ ACTIVE MAIN STORY QUEST ]</span>
          </div>
          <div
            style={{
              color: "var(--text-secondary)",
              border: "1px solid rgba(0, 210, 255, 0.2)",
              background: "rgba(2, 4, 8, 0.6)",
              padding: "4px 12px",
              borderRadius: "2px",
            }}
          >
            QUEST PERIOD: 2024 — 2028
          </div>
        </div>

        {/* School & Degree */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <div
            style={{
              padding: "12px",
              background: "rgba(0, 210, 255, 0.05)",
              border: "1px solid var(--accent-blue)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GraduationCap size={36} style={{ color: "var(--accent-blue)" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontFamily: "var(--font-hud)",
                fontSize: "0.75rem",
                color: "var(--accent-purple)",
                letterSpacing: "1.5px",
              }}
            >
              VTU AFFILIATED MAINFRAME
            </span>
            <h3
              style={{
                fontFamily: "var(--font-hud)",
                fontSize: "1.3rem",
                fontWeight: "900",
                color: "#fff",
                letterSpacing: "0.5px",
              }}
            >
              VIDYAVARDHAKA COLLEGE OF ENGINEERING (VVCE), MYSURU
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--accent-cyan)",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "4px",
              }}
            >
              <Bookmark size={14} /> Bachelor of Engineering (B.E.) — Computer Science & Engineering
            </p>
          </div>
        </div>

        <div className="diagonal-stripes" style={{ height: "4px" }} />

        {/* Graduation Level Meter */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "var(--font-hud)",
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
            }}
          >
            <span>QUEST PROGRESSION (SEMESTER EXP)</span>
            <span style={{ color: "#fff" }}>25% UNLOCKED (1ST YEAR COMPLETED)</span>
          </div>
          <div className="hud-bar-container" style={{ height: "14px" }}>
            <div className="hud-bar-fill" style={{ width: "25%" }} />
          </div>
        </div>

        {/* Quest Sub-Objectives Checklist */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h4
            style={{
              fontFamily: "var(--font-hud)",
              fontSize: "0.8rem",
              letterSpacing: "2px",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Landmark size={14} style={{ color: "var(--accent-purple)" }} /> SUB-QUEST OBJECTIVES (ACADEMIC FOCUS):
          </h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {objectives.map((obj) => (
              <div
                key={obj.num}
                style={{
                  display: "flex",
                  gap: "12px",
                  background: "rgba(2, 4, 8, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.02)",
                  padding: "12px 16px",
                  borderRadius: "4px",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0, 210, 255, 0.2)";
                  e.currentTarget.style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.02)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-hud)",
                    fontSize: "0.7rem",
                    color: "var(--accent-cyan)",
                    border: "1px solid var(--accent-cyan)",
                    padding: "2px 6px",
                    borderRadius: "2px",
                  }}
                >
                  OBJ_{obj.num}
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                  {obj.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default Education;
