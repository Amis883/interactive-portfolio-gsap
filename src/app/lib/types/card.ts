export type Project = {
  name: string;
  link: string;
  image: string;
};

type BaseCard = {
  id: number;
  title: string;
  image?: string;
  summary?: string;
};

export type AboutCard = BaseCard & {
  details: string[];
};

export type SkillsCard = BaseCard & {
  tags: string[];
};

export type ProjectsCard = BaseCard & {
  projects: Project[];
};

export type CardType = AboutCard | SkillsCard | ProjectsCard;