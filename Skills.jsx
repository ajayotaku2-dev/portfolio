import { useState } from "react";
import RevealSection from "./RevealSection";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Terminal, Server, Database, Settings } from "lucide-react";

const Skills = () => {
  const [activeCat, setActiveCat] = useState("languages");

  const categories = [
    { id: "languages", name: "LANGUAGES", icon: Terminal, jpName: "言語" },
    { id: "frontend", name: "FRONTEND", icon: Code, jpName: "フロント" },
    { id: "backend", name: "BACKEND", icon: Server, jpName: "バックエンド" },
    { id: "database", name: "DATABASE", icon: Database, jpName: "データベース" },
    { id: "tools", name: "SYSTEM TOOLS", icon: Settings, jpName: "ツール" },
  ];

  const skillData = {
    languages: [
      { name: "JavaScript", level: 90, desc: "Primary logic syntax for web scripts and interactive systems." },
      { name: "Python", level: 85, desc: "Used for general computations, automation scripts, and backend prototypes." },
      { name: "C Language", level: 80, desc: "Foundational syntax for memory structures and pointer algorithms." },
    ],
    frontend: [
      { name: "React", level: 88, desc: "Standard client blueprint compiler for interactive SPA nodes." },
      { name: "Vite", level: 85, desc: "Modern frontend build engine with rapid virtual hot-reloading." },
      { name: "HTML5", level: 95, desc: "Structure markup parser for digital layouts and DOM frameworks." },
      { name: "CSS3", level: 90, desc: "Styling sheet compiler using responsive grids, shapes, and custom glows." },
    ],
    backend: [
      { name: "Node.js", level: 80, desc: "Runtime compiler for executing JavaScript logic on the server mainframe." },
      { name: "Express.js", level: 82, desc: "Routing server blueprint library for standard REST API endpoints." },
    ],
    database: [
      { name: "Supabase", level: 85, desc: "Digital database cluster mapping custom authentication and tables." },
      { name: "PostgreSQL", level: 80, desc: "Relational database server using rigid schemas and secure logic queries." },
      { name: "MongoDB", level: 78, desc: "Document database storage using dynamic JSON schema models." },
    ],
    tools: [
      { name: "Git", level: 85, desc: "Main version logger and branch management database tool." },
      { name: "GitHub", level: 88, desc: "Remote terminal server for online repository backups." },
      { name: "VS Code", level: 92, desc: "Primary IDE workspace styled with keybind maps and extensions." },
    ],
  };

  return (
    <RevealSection id="skills" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Section Header Divider */}
      <div className="section-divider">
        <h2 style={{ fontFamily: "var(--font-hud)", fontSize: "1.5rem", letterSpacing: "3px", color: "#fff" }}>
          03 // ACTIVE ABILITIES
        </h2>
        <div className="section-divider-node">ABILITIES</div>
        <div className="section-divider-line"></div>
        <span style={{ fontFamily: "var(--font-hud)", fontSize: "0.8rem", color: "var(--text-muted)" }}>[能力グリッド]</span>
      </div>

      {/* Grid container with custom layouts */}
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        
        {/* Category console selectors */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            background: "rgba(2, 4, 8, 0.4)",
            border: "1px solid rgba(0, 210, 255, 0.1)",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCat === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`hud-btn ${isActive ? "" : "hud-btn-purple"}`}
                style={{
                  padding: "10px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.75rem",
                  letterSpacing: "1.5px",
                  color: isActive ? "var(--bg-darker)" : "var(--text-secondary)",
                  background: isActive ? "var(--accent-blue)" : "transparent",
                  borderColor: isActive ? "var(--accent-cyan)" : "rgba(189, 0, 255, 0.3)",
                  flexGrow: 1,
                  justifyContent: "center",
                }}
              >
                <Icon size={14} />
                <span>{cat.name}</span>
                <span
                  style={{
                    fontFamily: "var(--font-jp)",
                    fontSize: "0.55rem",
                    color: isActive ? "var(--bg-darker)" : "var(--text-muted)",
                    marginLeft: "4px",
                  }}
                >
                  [{cat.jpName}]
                </span>
              </button>
            );
          })}
        </div>

        {/* Ability Nodes Grid inside wrapper */}
        <div style={{ minHeight: "260px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {skillData[activeCat].map((skill, idx) => (
                <div
                  key={idx}
                  className="hud-panel cyber-scanlines"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    padding: "20px",
                    borderLeft: `3px solid ${activeCat === "frontend" || activeCat === "languages" ? "var(--accent-cyan)" : "var(--accent-purple)"}`,
                  }}
                >
                  <div className="hud-panel-bottom" />

                  {/* Node Heading */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-hud)", fontSize: "0.95rem", letterSpacing: "1px", fontWeight: "700" }}>
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-hud)",
                        fontSize: "0.75rem",
                        color: activeCat === "frontend" || activeCat === "languages" ? "var(--accent-cyan)" : "var(--accent-purple)",
                        fontWeight: "900",
                        textShadow: activeCat === "frontend" || activeCat === "languages" ? "var(--neon-glow-cyan)" : "var(--neon-glow-purple)",
                      }}
                    >
                      LV. {skill.level}
                    </span>
                  </div>

                  {/* Level Progress Gauge Bar */}
                  <div>
                    <div className="hud-bar-container" style={{ height: "8px" }}>
                      <div
                        className={`hud-bar-fill ${activeCat === "frontend" || activeCat === "languages" ? "" : "hud-bar-fill-purple"}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>

                  {/* Skill Context Description */}
                  <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                    {skill.desc}
                  </p>

                  {/* Micro crosshair decorative visualizer */}
                  <div style={{ display: "flex", justifyContent: "flex-end", opacity: 0.3 }}>
                    <span style={{ fontFamily: "var(--font-hud)", fontSize: "0.5rem" }}>
                      [ SYS_OK // NOD_0{idx + 1} ]
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </RevealSection>
  );
};

export default Skills;
