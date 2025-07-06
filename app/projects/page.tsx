import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Scalable RAG Application for Medical Assistants",
    skills: ["OpenAI API", "LangChain", "Node.js", "Next.js", "TypeScript"],
    bullets: [
      "Developed a scalable application with Next.js frontend, Express backend, Redis queues, and Qdrant vector database.",
      "Implemented Docker containerization, Clerk authentication, and BullMQ workers for secure document processing.",
      "Enabled efficient, secure, and accurate document analysis in medical settings."
    ],
    live: "https://scalable-rag-application-hospitals.vercel.app/",
    github: "https://github.com/mangesh925/scalable-RAG-application-hospitals",
    badge: "healthcare",
    badgeColor: "bg-green-900 text-green-200",
  },
  {
    name: "DietPlan AI",
    skills: ["Llama 3.2 3B", "Next.js", "Prisma", "Stripe", "TypeScript"],
    bullets: [
      "Engineered an AI service to generate personalized meal plans for users.",
      "Integrated Stripe for payments, Prisma for database operations, and Tailwind CSS for the UI.",
      "Automated CI/CD pipeline to Vercel via GitHub and secured authentication with Clerk."
    ],
    live: "https://diet-plan-ai.vercel.app/",
    github: "https://github.com/mangesh925/diet-plan-ai",
    badge: "ai/saas",
    badgeColor: "bg-blue-900 text-blue-200",
  },
  {
    name: "Coding Research Assistant",
    skills: ["LangGraph", "GPT-4", "Python", "Pydantic", "Firecrawl"],
    bullets: [
      "Orchestrated research automation with LangGraph, Firecrawl, and GPT-4.",
      "Designed custom prompts for GPT-4 to extract developer-centric metrics like pricing, tech stack, and API availability.",
      "Engineered a Python data extraction pipeline leveraging Pydantic for reliable data modeling."
    ],
    github: "https://github.com/mangesh925/coding-research-assistant",
    badge: "research",
    badgeColor: "bg-purple-900 text-purple-200",
  },
  {
    name: "Collab",
    skills: ["Next.js", "React.js", "Clerk", "Convex", "Tailwind CSS"],
    bullets: [
      "Integrated Clerk for secure authentication and Convex for real-time functionality.",
      "Empowered remote teamwork and drove a 50% improvement in team productivity.",
      "Implemented a feature-rich toolset to boost dynamic collaboration and reduce project completion time by 25%."
    ],
    live: "https://collab-app-kappa.vercel.app/",
    github: "https://collab-app-kappa.vercel.app/",
    badge: "collaboration",
    badgeColor: "bg-yellow-900 text-yellow-200",
  },
  {
    name: "DocuChatter-AI",
    skills: ["Next.js", "TypeScript", "LangChain", "Pinecone", "Stripe"],
    bullets: [
      "Implemented LangChain for AI memory and Pinecone for optimized vector storage, improving performance by 30%.",
      "Streamlined subscription processes with Stripe and crafted a user-friendly interface using shadcn-ui.",
      "Enabled a 40% increase in user interaction with documents through seamless chat functionality."
    ],
    live: "https://docuchatter.vercel.app/",
    github: "https://github.com/mangesh925/docuchatter",
    badge: "saas",
    badgeColor: "bg-pink-900 text-pink-200",
  },
  {
    name: "Equal-Weight S&P 500 Index Fund Model",
    skills: ["Python", "Pandas", "NumPy", "IEX Cloud API", "Jupyter"],
    bullets: [
      "Built a Python application with Pandas and NumPy for S&P 500 stock data analysis and portfolio rebalancing.",
      "Integrated IEX Cloud API for real-time financial data, facilitating accurate investment calculations and strategies.",
      "Authored a concise guide within a Jupyter Notebook on portfolio management and algorithmic trading concepts."
    ],
    github: "https://github.com/mangesh925/StockAnalysis-Trading-Algorithm",
    badge: "finance",
    badgeColor: "bg-indigo-900 text-indigo-200",
  },
  {
    name: "Taskmate",
    skills: ["Next.js", "TypeScript", "OpenAI API", "DALL·E", "Firebase"],
    bullets: [
      "Created an AI-powered note-taking app resulting in a 20% increase in user productivity.",
      "Implemented DALL·E API for image generation, storing results in Firebase for efficient data management.",
      "Optimized Drizzle ORM for efficient database interactions and Tailwind CSS for UI design, leading to a 30% increase in user retention."
    ],
    live: "https://taskmate-ai.vercel.app/",
    github: "https://github.com/mangesh925/TaskMate",
    badge: "productivity",
    badgeColor: "bg-teal-900 text-teal-200",
  },
];

export default function Projects() {
  return (
    <main
      className="max-w-2xl mx-auto px-4 py-8"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <h1 className="text-[2.90em] font-[500] font-sans mb-4" style={{ color: "var(--foreground)" }}>
        Projects
      </h1>
      <p className="font-sans text-lg mb-8" style={{ color: "var(--foreground)" }}>
        I have built robust, scalable applications that combined AI, automation, and modern web technologies. My projects included healthcare RAG systems, SaaS platforms, developer tools, and productivity apps prioritizing seamless user experiences using frameworks like Next.js, Node.js, and the latest AI APIs.
      </p>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-white/90 border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-4"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "var(--foreground)",
            }}
          >
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-xl font-bold font-sans" style={{ color: "var(--foreground)" }}>
                {project.name}
              </span>
              {project.badge && (
                <span className={`ml-2 px-2 py-1 text-xs rounded ${project.badgeColor} font-semibold uppercase`}>
                  {project.badge}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded-full bg-green-900/40 text-green-200 text-xs font-medium tracking-wide"
                  style={{
                    background: "rgba(180, 210, 115, 0.12)",
                    color: "#b4d273",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
            <ul className="list-disc pl-5 space-y-1 font-sans text-base" style={{ color: "var(--foreground)" }}>
              {project.bullets.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="flex gap-2 mt-2">
              <a
                href={project.live || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 rounded hover:bg-green-900/20 font-sans text-sm transition"
                style={{
                  background: "rgba(229,232,214,0.15)",
                  color: "var(--foreground)",
                  pointerEvents: project.live ? "auto" : "none",
                  opacity: project.live ? 1 : 0.5,
                }}
              >
                <FaExternalLinkAlt size={14} />
                <span>Visit Website</span>
              </a>
              <a
                href={project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 rounded hover:bg-green-900/20 font-sans text-sm transition"
                style={{
                  background: "rgba(229,232,214,0.15)",
                  color: "var(--foreground)",
                  pointerEvents: project.github ? "auto" : "none",
                  opacity: project.github ? 1 : 0.5,
                }}
              >
                <FaGithub size={14} />
                <span>Visit GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 font-sans text-base text-center" style={{ color: "var(--foreground)" }}>
        Here are some more projects that I have worked on. You can find the complete list of projects on my{" "}
        <a
          href="https://github.com/mangesh925"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-text-underline"
          style={{ color: "var(--foreground)" }}
        >
          GitHub Profile
        </a>.
      </p>
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
