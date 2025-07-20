import Link from "next/link";
import { MdFolderOpen, MdOutlineArticle } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto px-4 py-6">
      <div className="flex flex-col items-start">
        <h1 className="text-[2.90em] font-[500] font-sans mb-4 text-left" style={{ color: "var(--foreground)" }}>
          Mangesh Ahirrao
        </h1>
        <div className="space-y-4 font-sans mb-6 text-left text-lg font-normal" style={{ color: "var(--foreground)" }}>
          <p>
            As a Software Developer with a background in Math and Economics, I architect and build robust applications using JavaScript, TypeScript, Python, React, and Node.js. I specialize in tackling complex technical challenges, from engineering data pipelines with third-party APIs to optimizing application performance and automating critical workflows.
          </p>
          <p>
            My experience in developing analytics platforms, healthcare tools, and SaaS products is focused on creating clean, high-impact solutions. I am looking for a new opportunity to apply my technical skills to solve meaningful problems.
          </p>
        </div>
        {/* Navigation Bar */}
        <nav className="flex flex-wrap gap-4 items-center justify-start font-sans text-lg font-normal">
          <a
            href="https://github.com/mangesh925"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 no-underline text-left"
            style={{ color: "var(--foreground)" }}
          >
            <FaGithub size={18} />
            <span className="nav-text-underline">GitHub</span>
          </a>
          <Link
            href="/projects"
            className="flex items-center gap-1 no-underline text-left"
            style={{ color: "var(--foreground)" }}
          >
            <MdFolderOpen size={20} />
            <span className="nav-text-underline">Projects</span>
          </Link>
          
          <a
            href="https://www.linkedin.com/in/mangeshjahirrao/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 no-underline text-left"
            style={{ color: "var(--foreground)" }}
          >
            <FaLinkedin size={18} />
            <span className="nav-text-underline">LinkedIn</span>
          </a>
          <a
            href="https://ahirrao.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 no-underline text-left"
            style={{ color: "var(--foreground)" }}
          >
            <MdOutlineArticle size={20} />
            <span className="nav-text-underline">Substack</span>
          </a>
        </nav>
      </div>
    </main>
  );
}
