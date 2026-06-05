export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Freshmen Partner",
    organization: "Bina Nusantara University",
    period: "2025 - 2026",
    description:
      "Mentoring and supporting new students as they adapt to university life, academic expectations, and campus activities.",
    highlights: [
      "Guided freshmen through their early transition into university life.",
      "Provided peer support, practical information, and academic adjustment guidance.",
      "Strengthened communication, leadership, and mentoring skills through student support activities.",
    ],
  },
  
];
