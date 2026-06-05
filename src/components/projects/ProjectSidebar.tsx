import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectTag } from "@/components/projects/ProjectTag";

type ProjectSidebarProps = {
  project: Project;
};

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
      <section className="rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-semibold uppercase text-accent-blue">Summary</p>
        <p className="mt-4 text-sm leading-7 text-muted">{project.overview}</p>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-hairline">
        <h2 className="text-lg font-semibold text-ink">Tags</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <ProjectTag key={tag}>{tag}</ProjectTag>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-hairline">
        <h2 className="text-lg font-semibold text-ink">Tools</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tool) => (
            <ProjectTag key={tool}>{tool}</ProjectTag>
          ))}
        </div>
      </section>

      {(project.demoUrl || project.githubUrl) ? (
        <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-hairline">
          <h2 className="text-lg font-semibold text-ink">Quick Links</h2>
          <div className="mt-5 space-y-3">
            {project.demoUrl ? (
              <SidebarLink href={project.demoUrl} label="View Live Demo" icon={<ArrowUpRight aria-hidden="true" className="h-4 w-4" />} />
            ) : null}
            {project.githubUrl ? (
              <SidebarLink href={project.githubUrl} label="View GitHub" icon={<Github aria-hidden="true" className="h-4 w-4" />} />
            ) : null}
          </div>
        </section>
      ) : null}
    </aside>
  );
}

function SidebarLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="focus-ring flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-ink transition hover:border-slate-300 hover:bg-white"
    >
      <span>{label}</span>
      {icon}
    </Link>
  );
}
