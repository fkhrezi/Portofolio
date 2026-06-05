export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Product & Design",
    description:
      "Skills used to turn ideas into structured, user-focused digital product concepts.",
    items: [
      "UI/UX Design",
      "Product Thinking",
      "User Journey Mapping",
      "Problem-Solution Mapping",
      "Responsive Web Design",
    ],
  },
  {
    title: "Web, Data & Business",
    description:
      "Technical and analytical skills developed through Information System coursework and portfolio projects.",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Business Analysis",
      "Microsoft Excel",
      "Power Query",
      "Power Pivot",
      "Data Analysis",
    ],
  },
  {
    title: "AI & Development Tools",
    description:
      "Tools and workflows used to support learning, prototyping, documentation, and deployment.",
    items: [
      "AI Tools",
      "Prompt Engineering",
      "ChatGPT / Codex",
      "Figma",
      "Google Colab",
      "GitHub",
      "Vercel",
    ],
  },
];
