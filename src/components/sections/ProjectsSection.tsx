import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <SectionShell id="projects" className="bg-white" containerClassName="max-w-6xl">
      <div className="mb-12 grid gap-8 lg:grid-cols-[0.76fr_0.24fr] lg:items-end">
        <SectionHeader
          eyebrow="Featured Projects"
          title="A curated look at product thinking, practical systems, and AI-assisted building."
          description="Each project is organized as a case study, with Future Self highlighted as the main product prototype and the strongest example of ongoing product development."
          className="mb-0"
        />
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600">
          <p className="font-semibold text-ink">Portfolio focus</p>
          <p className="mt-2">
            Practical digital solutions, clear problem framing, and thoughtful interface structure.
          </p>
        </div>
      </div>

      {featuredProject ? <FeaturedProjectCard project={featuredProject} /> : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
