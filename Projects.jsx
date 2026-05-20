import RevealSection from "./RevealSection";
import { ExternalLink, Trophy, Compass, Star } from "lucide-react";

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

const Projects = () => {
  const projects = [
    {
      id: "campuslink",
      type: "MAIN QUEST",
      name: "CampusLink",
      jpName: "キャンパスリンク",
      status: "IN PROGRESS",
      difficulty: "HARD",
      desc: "A comprehensive full-stack campus community web application custom engineered for Vidyavardhaka College of Engineering (VVCE) students. Features include an active peer Marketplace, Event coordinates, open discussion Forum boards, group messaging nodes, and personal Connection Wishlists.",
      loot: ["React + Vite", "Node.js", "Express.js", "Supabase", "PostgreSQL"],
      github: "https://github.com/ajayotaku2-dev/CampusLink",
      live: "#",
    },
    {
      id: "campusfinance",
      type: "HACKATHON QUEST",
      name: "CampusFinance",
      jpName: "キャンパスファイナンス",
      status: "IN PROGRESS",
      difficulty: "MEDIUM",
      desc: "A student-centric financial micro-budgeting dashboard built under tight hackathon timelines. Empowers students to log daily expenditures, track scholarship/grant allocations, and visualize monthly budgeting structures to curb college costs.",
      loot: ["React", "Node.js", "Express.js", "Supabase"],
      github: "https://github.com/ajayotaku2-dev/CampusFinance",
      live: "#",
    },
  ];

  return (
    <RevealSection id="projects" style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Section Divider */}
      <div className="section-divider">
        <h2 style={{ fontFamily: "var(--font-hud)", fontSize: "1.5rem", letterSpacing: "3px", color: "#fff" }}>
          04 // ACTIVE QUEST LOG
        </h2>
        <div className="section-divider-node">QUESTS</div>
        <div className="section-divider-line"></div>
        <span style={{ fontFamily: "var(--font-hud)", fontSize: "0.8rem", color: "var(--text-muted)" }}>[開発プロジェクト]</span>
      </div>

      {/* Projects Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="hud-panel cyber-scanlines glitch-border"
            style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              background: "rgba(6, 14, 28, 0.6)",
              minHeight: "440px",
            }}
          >
            {/* Card corner decorator */}
            <div className="hud-panel-bottom" />

            {/* Header: Quest classification & Rating */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "var(--font-hud)",
                fontSize: "0.65rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--accent-purple)" }}>
                <Compass size={12} />
                <span>[{project.type}]</span>
              </div>
              <div
                style={{
                  color: project.difficulty === "HARD" ? "var(--accent-cyan)" : "var(--accent-blue)",
                  border: `1px solid ${project.difficulty === "HARD" ? "rgba(0, 255, 196, 0.2)" : "rgba(0, 210, 255, 0.2)"}`,
                  background: project.difficulty === "HARD" ? "rgba(0, 255, 196, 0.05)" : "rgba(0, 210, 255, 0.05)",
                  padding: "2px 8px",
                  borderRadius: "2px",
                }}
              >
                DIFF: {project.difficulty}
              </div>
            </div>

            {/* Title Block */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <h3
                  className="text-glow-blue"
                  style={{
                    fontFamily: "var(--font-hud)",
                    fontSize: "1.4rem",
                    fontWeight: "900",
                    letterSpacing: "1px",
                    color: "#fff",
                  }}
                >
                  {project.name}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-hud)",
                    fontSize: "0.65rem",
                    color: "var(--accent-cyan)",
                    fontWeight: "700",
                  }}
                >
                  [ {project.status} ]
                </span>
              </div>
              <span style={{ fontFamily: "var(--font-jp)", fontSize: "0.65rem", color: "var(--text-muted)" }}>
                {project.jpName}
              </span>
            </div>

            <div className="diagonal-stripes" />

            {/* Description */}
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                lineHeight: "1.6",
                flexGrow: 1,
              }}
            >
              {project.desc}
            </p>

            {/* Tech loot drops */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span
                style={{
                  fontFamily: "var(--font-hud)",
                  fontSize: "0.65rem",
                  color: "var(--accent-purple)",
                  letterSpacing: "1.5px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Trophy size={11} /> QUEST_LOOT (TECH_STACK):
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.loot.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--text-primary)",
                      border: "1px solid rgba(0, 210, 255, 0.15)",
                      background: "rgba(0, 210, 255, 0.03)",
                      padding: "4px 8px",
                      borderRadius: "2px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-cyan)";
                      e.currentTarget.style.boxShadow = "var(--neon-glow-cyan)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0, 210, 255, 0.15)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Button links */}
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{ flexGrow: 1, textDecoration: "none" }}
              >
                <button
                  className="hud-btn hud-btn-purple"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "8px 12px",
                    fontSize: "0.7rem",
                  }}
                >
                  <GithubIcon size={12} /> SOURCE_CODE
                </button>
              </a>
              <a href={project.live} style={{ flexGrow: 1, textDecoration: "none" }}>
                <button
                  className="hud-btn"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "8px 12px",
                    fontSize: "0.7rem",
                  }}
                >
                  <ExternalLink size={12} /> LAUNCH_QUEST
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
};

export default Projects;
