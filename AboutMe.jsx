import RevealSection from "./RevealSection";
import { User, ShieldAlert, Zap, Cpu } from "lucide-react";

const AboutMe = () => {
  const passiveSkills = [
    {
      id: "fast_learner",
      name: "FAST LEARNER",
      jpName: "急速な学習",
      desc: "Adapting swiftly to novel system structures, coding stacks, and developer tools.",
    },
    {
      id: "creative_builder",
      name: "CREATIVE BUILDER",
      jpName: "創造的創造物",
      desc: "Architecting immersive designs, interactive HUD graphics, and detailed animations.",
    },
    {
      id: "otaku_core",
      name: "OTAKU CORE",
      jpName: "オタク精神",
      desc: "Drawing inspiration from story-rich games, detailed manga, and complex anime themes.",
    },
    {
      id: "problem_solver",
      name: "PROBLEM SOLVER",
      jpName: "解決者",
      desc: "Approaching logic bugs and algorithmic hurdles with a systematic C/Python process.",
    },
  ];

  return (
    <RevealSection id="about" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Title Divider */}
      <div className="section-divider">
        <h2 style={{ fontFamily: "var(--font-hud)", fontSize: "1.5rem", letterSpacing: "3px", color: "#fff" }}>
          02 // CHARACTER PROFILE
        </h2>
        <div className="section-divider-node">PROFILE</div>
        <div className="section-divider-line"></div>
        <span style={{ fontFamily: "var(--font-hud)", fontSize: "0.8rem", color: "var(--text-muted)" }}>[自己紹介]</span>
      </div>

      <div className="rpg-grid">
        {/* Left Panel: RPG Stat Sheet */}
        <div className="hud-panel cyber-scanlines" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="hud-panel-bottom" />
          
          {/* Card Top Branding */}
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-hud)", fontSize: "0.7rem", color: "var(--accent-blue)" }}>
            <span>SEC_STATUS: SECURE</span>
            <span>ID: AJAY_8923</span>
          </div>

          {/* SVG Character Avatar Silhouette / Energy Core */}
          <div
            style={{
              height: "200px",
              width: "100%",
              border: "1px solid rgba(0, 210, 255, 0.1)",
              background: "rgba(2, 4, 8, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Holographic background rings */}
            <div
              style={{
                position: "absolute",
                width: "140px",
                height: "140px",
                border: "2px dashed var(--accent-cyan)",
                borderRadius: "50%",
                opacity: 0.25,
                animation: "spin-hud 25s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "110px",
                height: "110px",
                border: "1px solid var(--accent-purple)",
                borderRadius: "50%",
                opacity: 0.3,
                animation: "spin-hud 15s linear infinite reverse",
              }}
            />
            {/* Hexagon core representation */}
            <Cpu
              size={48}
              style={{
                color: "var(--accent-cyan)",
                filter: "drop-shadow(0 0 10px var(--accent-cyan))",
                zIndex: 2,
              }}
            />
            
            {/* Absolute indicator tags inside screen */}
            <div style={{ position: "absolute", top: "8px", left: "8px", fontFamily: "var(--font-hud)", fontSize: "0.55rem", color: "var(--accent-cyan)" }}>[CORE_MONITOR]</div>
            <div style={{ position: "absolute", bottom: "8px", right: "8px", fontFamily: "var(--font-hud)", fontSize: "0.55rem", color: "var(--accent-purple)" }}>ONLINE</div>
          </div>

          {/* Character Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontFamily: "var(--font-hud)" }}>
            {/* Basic Info */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>CHARACTER:</span>
              <span style={{ textAlign: "right", color: "#fff", fontSize: "0.85rem" }}>AJAY</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>CLASS:</span>
              <span style={{ textAlign: "right", color: "var(--accent-cyan)", fontSize: "0.85rem" }}>CSE STUDENT</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>GUILD:</span>
              <span style={{ textAlign: "right", color: "var(--accent-blue)", fontSize: "0.75rem" }}>VVCE, VTU AFFILIATED</span>
            </div>

            {/* RPG Bars */}
            <div style={{ marginTop: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", marginBottom: "4px" }}>
                <span style={{ color: "var(--accent-cyan)", display: "flex", alignItems: "center", gap: "2px" }}>
                  <Zap size={10} /> HP (STAMINA)
                </span>
                <span style={{ color: "#fff" }}>99 / 99</span>
              </div>
              <div className="hud-bar-container">
                <div className="hud-bar-fill" style={{ width: "100%" }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", marginBottom: "4px" }}>
                <span style={{ color: "var(--accent-purple)", display: "flex", alignItems: "center", gap: "2px" }}>
                  <Zap size={10} /> MP (MANA / LOGIC)
                </span>
                <span style={{ color: "#fff" }}>85 / 100</span>
              </div>
              <div className="hud-bar-container">
                <div className="hud-bar-fill hud-bar-fill-purple" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Biography and Passive Traits Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Detailed Biography panel */}
          <div className="hud-panel" style={{ borderLeft: "4px solid var(--accent-blue)" }}>
            <div className="hud-panel-bottom" />
            <h3 style={{ fontFamily: "var(--font-hud)", fontSize: "1rem", letterSpacing: "2px", color: "var(--accent-cyan)", marginBottom: "12px" }}>
              [ LOG_ENTRY // TRANSMISSION_RECEIVED ]
            </h3>
            <p style={{ lineHeight: "1.8", color: "var(--text-secondary)", fontSize: "1.05rem" }}>
              I am a first-year B.E. Computer Science student at Vidyavardhaka College of Engineering (VVCE), Mysuru, affiliated with VTU.
              Deeply passionate about modern web technologies and full-stack architecture, I also enjoy exploring game development,
              diving into immersive anime worlds, and building sleek, responsive systems that bridge functional design with engaging storytelling.
            </p>
          </div>

          {/* Active Passive Traits Grid */}
          <div>
            <h3 style={{ fontFamily: "var(--font-hud)", fontSize: "0.9rem", letterSpacing: "3px", color: "#fff", marginBottom: "20px" }}>
              &gt;&gt; ACTIVE PASSIVE SKILLS
            </h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              {passiveSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="hud-panel glitch-border"
                  style={{
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div className="hud-panel-bottom" />
                  
                  {/* Skill Heading */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-hud)", fontSize: "0.75rem", letterSpacing: "1px", color: "var(--accent-cyan)" }}>
                      [{skill.name}]
                    </span>
                    <span style={{ fontFamily: "var(--font-jp)", fontSize: "0.6rem", color: "var(--text-muted)" }}>
                      {skill.jpName}
                    </span>
                  </div>
                  
                  <div style={{ width: "20px", height: "2px", backgroundColor: "var(--accent-purple)" }} />
                  
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};

export default AboutMe;
