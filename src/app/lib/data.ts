export type PortfolioItem = {
  id: string;
  title: string;
  category: "Project" | "Experience" | "Skill";
  description: string;
  tech?: string[];
};

export const items: PortfolioItem[] = [
  {
    id: "project-1",
    title: "AI Notes App",
    category: "Project",
    description: "AI-powered note-taking app with Next.js + PostgreSQL.",
    tech: ["Next.js", "PostgreSQL"],
  },
  {
    id: "project-2",
    title: "Admin Dashboard",
    category: "Project",
    description: "User management dashboard with filtering, pagination.",
    tech: ["Next.js", "TypeScript"],
  },
  {
    id: "exp-1",
    title: "BehineSazanToos",
    category: "Experience",
    description: "Improved performance and API structure in large dashboard.",
  },
];
