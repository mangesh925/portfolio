import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  name: string;
  description: string;
  stats?: Array<{ label: string; value: string }>;
  liveLink: string;
  githubLink: string;
  badge?: string;
  badgeColor?: string;
};

export default function ProjectCard({
  name,
  description,
  stats = [],
  liveLink,
  githubLink,
  badge,
  badgeColor = "bg-yellow-400 text-black",
}: ProjectCardProps) {
  return (
    <div className="bg-white/90 border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xl font-bold font-sans text-neutral-900">{name}</span>
        {badge && (
          <span className={`ml-2 px-2 py-1 text-xs rounded ${badgeColor} font-semibold uppercase`}>
            {badge}
          </span>
        )}
      </div>
      <p className="font-sans text-neutral-800">{description}</p>
      {stats.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-neutral-100 rounded p-3 flex flex-col items-center min-w-[120px]">
              <span className="text-xs text-neutral-500 font-medium">{stat.label}</span>
              <span className="text-base font-bold text-neutral-900">{stat.value}</span>
            </div>
          ))}
        </div>
      )}
      <div className="flex gap-2 mt-2">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-3 py-1.5 bg-neutral-200 text-neutral-800 rounded hover:bg-neutral-300 font-sans text-sm"
        >
          <FaExternalLinkAlt size={14} />
          <span>Visit Website</span>
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-3 py-1.5 bg-neutral-200 text-neutral-800 rounded hover:bg-neutral-300 font-sans text-sm"
        >
          <FaGithub size={14} />
          <span>Visit GitHub</span>
        </a>
      </div>
    </div>
  );
}
