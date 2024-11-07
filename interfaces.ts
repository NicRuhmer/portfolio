export interface Experience {
  id: number;
  period: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: number;
  year: number;
  image: string;
  alt_title: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  linkText: string;
  madeAt: string;
  progress: string;
}
