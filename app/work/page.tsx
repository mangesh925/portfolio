import Link from "next/link";

const experiences = [
  {
    company: "Eagle Creek Software Services",
    role: "Software Developer",
    duration: "May 2024 – Present",
    skills: ["Node.js", "React", "PostgreSQL", "FHIR API", "Epic"],
    bullets: [
      "Developed a claims review platform, creating a Node.js REST API and a React frontend that automated error detection by flagging records with missing codes or documentation.",
      "Engineered a data pipeline integrating with Epic's FHIR API, polling endpoints and transforming claim updates to fit the application's PostgreSQL schema.",
      "Optimized PostgreSQL performance by implementing composite indexes on key tables, cutting report load times by over 60% (from >10s to <4s) for 50k+ records.",
      "Implemented virtualized list components in React to efficiently render and filter thousands of claims, reducing the billing team's manual review time by 40%.",
    ],
  },
  {
    company: "CrowdDoing",
    role: "Data Scientist (Volunteer)",
    duration: "Apr 2024 – Dec 2024",
    skills: ["Python", "pandas", "scikit-learn", "K-means", "Random Forest", "Gradient Boosting"],
    bullets: [
      "Built a scalable analytics platform using Python, pandas, and scikit-learn to process and analyze 421+ park visits across 109 parks, applying machine learning and statistical methods for urban space optimization.",
      "Implemented K-means clustering for geographic analysis and developed predictive models using Random Forest and Gradient Boosting that achieved 0.85 R² score for visit duration forecasting.",
      "Applied sequential pattern mining techniques to uncover park-to-park transition patterns, identifying the critical gateway parks requiring prioritized resource allocation.",
      "Coordinated the designing of a geographic imputation algorithm (weighted coordinate calculations) and a context-aware filtering system, ensuring high-quality, reliable spatial and temporal data for downstream analysis.",
    ],
  },
  {
    company: "Thielen Health Center, ISU",
    role: "Software Developer",
    duration: "Aug 2020 – May 2021",
    skills: ["Java", "Spring Boot", "React.js", "REST API", "Google Analytics"],
    bullets: [
      "Spearheaded the development of an RT-PCR test booking portal using Java, Spring Boot, and React.js, enhancing UI/UX and reducing phone appointments by 75% through a Java-based RESTful API implementation for online scheduling.",
      "Integrated Google Analytics APIs with Java, delivering real-time user data and enhancing testing resource management by 30%.",
      "Created a responsive, ADA-compliant UI, ensuring broad accessibility and boosting portal engagement by 40%.",
    ],
  },
  
];

export default function Work() {
  return (
    <main
      className="max-w-xl mx-auto px-4 py-8"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <h1 className="text-[2.90em] font-[500] font-sans mb-4" style={{ color: "var(--foreground)" }}>
        Work
      </h1>
      <p className="font-sans text-lg mb-8" style={{ color: "var(--foreground)" }}>
        Here are some highlights from my professional experience.
      </p>
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="bg-white/90 border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-3"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "var(--foreground)",
            }}
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-0">
                <span className="text-[.95em] font-[600] font-sans" style={{ color: "var(--foreground)" }}>
                  {exp.role}
                </span>
                <span className="text-base font-sans opacity-80">| {exp.company}</span>
              </div>
              <div className="text-xs font-sans opacity-70 mt-1 mb-2">{exp.duration}</div>
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {exp.skills &&
                exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-green-900/40 text-green-200 text-xs font-medium tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
            </div>
            {exp.bullets && (
              <ul className="list-disc pl-5 space-y-1 font-sans text-base mt-2" style={{ color: "var(--foreground)" }}>
                {exp.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <Link
        href="/"
        className="block mt-10 text-left font-sans text-lg no-underline hover:underline"
        style={{ color: "var(--foreground)" }}
      >
        ← Back to Home
      </Link>
    </main>
  );
}
