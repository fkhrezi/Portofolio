import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Fakhri Fahrezi",
  description:
    "Project case studies by Fakhri Fahrezi across AI products, business concepts, UI/UX planning, and information systems.",
};

export default function ProjectsPage() {
  return (
    <SectionShell className="bg-white">
      <SectionHeader
        eyebrow="Projects"
        title="All project case studies."
        description="A scalable project index prepared for future filtering, search, and more detailed case studies."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
