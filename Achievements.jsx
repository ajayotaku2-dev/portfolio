import RevealSection from "./RevealSection";
import { Award, Star, Calendar, Terminal } from "lucide-react";

const Achievements = () => {
  const trophies = [
    {
      id: "hackathon_campusfinance",
      title: "HACKATHON PARTICIPANT",
      jpName: "ハッカソン出場者",
      award: "Designed & Assembled CampusFinance",
      date: "OCTOBER 2024",
      xpReward: "+500 XP UNLOCKED",
      desc: "Competed in an intense student hackathon sprint. Designed and assembled CampusFinance—a high-fidelity student-focused micro-budgeting web app. Effectively bridged a React interface layer with real-time Supabase analytics and authentication modules to streamline student financial tracking.",
    },
  ];

  return (
    <RevealSection id="achievements" style={{ padding: "60px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Title Divider */}
      <div className="section-divider">
        <h2 style={{ fontFamily: "var(--font-hud)", fontSize: "1.5rem", letterSpacing: "3px", color: "#fff" }}>
          05 // UNLOCKED TROPHIES
        </h2>
        <div className="section-divider-node">TROPHIES</div>
        <div className="section-divider-line"></div>
        <span style={{ fontFamily: "var(--font-hud)", fontSize: "0.8rem", color: "var(--text-muted)" }}>[受賞・実績]</span>
      </div>

      {/* Trophies listing container */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {trophies.map((trophy) => (
          <div
            key={trophy.id}
            className="hud-panel cyber-scanlines"
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: "24px",
              padding: "28px",
              borderRight: "4px solid var(--accent-purple)",
            }}
          >
            <div className="hud-panel-bottom" />

            {/* Left Column: Trophy Badge Visualizer */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(2,4,8,0.5)",
                border: "1px solid rgba(189, 0, 255, 0.2)",
                borderRadius: "4px",
                height: "100px",
                position: "relative",
              }}
            >
              {/* Spinning background halo */}
              <div
                style={{
                  position: "absolute",
                  width: "70px",
                  height: "70px",
                  border: "1px dashed var(--accent-purple)",
                  borderRadius: "50%",
                  opacity: 0.2,
                  animation: "spin-hud 20s linear infinite",
                }}
              />
              <Award
                size={36}
                style={{
                  color: "var(--accent-purple)",
                  filter: "drop-shadow(0 0 8px var(--accent-purple))",
                  zIndex: 2,
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: "4px",
                  fontFamily: "var(--font-hud)",
                  fontSize: "0.45rem",
                  color: "var(--accent-cyan)",
                  letterSpacing: "1px",
                }}
              >
                UNLOCKED
              </span>
            </div>

            {/* Right Column: Quest details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              
              {/* Trophy Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-hud)",
                      fontSize: "1.25rem",
                      fontWeight: "900",
                      color: "#fff",
                      letterSpacing: "1px",
                    }}
                  >
                    {trophy.title}
                  </h3>
                  <span style={{ fontFamily: "var(--font-jp)", fontSize: "0.6rem", color: "var(--text-muted)", marginTop: "2px" }}>
                    {trophy.jpName}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontFamily: "var(--font-hud)",
                    fontSize: "0.7rem",
                  }}
                >
                  <span style={{ color: "var(--accent-cyan)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Star size={11} /> {trophy.xpReward}
                  </span>
                  <span style={{ color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Calendar size={11} /> {trophy.date}
                  </span>
                </div>
              </div>

              {/* Stripe */}
              <div className="diagonal-stripes" style={{ height: "4px", opacity: 0.7 }} />

              {/* Award highlight line */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-hud)",
                  fontSize: "0.8rem",
                  color: "var(--accent-blue)",
                }}
              >
                <Terminal size={12} />
                <span>OBJECTIVE: {trophy.award}</span>
              </div>

              {/* Narrative description */}
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.6",
                }}
              >
                {trophy.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        @media (max-width: 600px) {
          #achievements .hud-panel {
            grid-template-columns: 1fr !important;
            justify-items: center;
            text-align: center;
          }
          #achievements .hud-panel div:nth-child(3) {
            align-items: center !important;
          }
        }
      `}</style>
    </RevealSection>
  );
};

export default Achievements;
