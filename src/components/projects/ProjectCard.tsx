import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectImageFrame } from "@/components/projects/ProjectImageFrame";
import { ProjectTag } from "@/components/projects/ProjectTag";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-hairline transition duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-soft">
      <Link href={`/projects/${project.slug}`} className="block">
        <ProjectImageFrame src={project.image} alt={`${project.title} project preview`} />
      </Link>

      <div className="flex flex-1 flex-col px-3 pb-4 pt-6 sm:px-4">
        <div className="mb-4 flex flex-wrap gap-2">
          <ProjectTag>{project.category[0]}</ProjectTag>
          <ProjectTag>{project.status}</ProjectTag>
        </div>

        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-sm font-medium text-slate-500">{project.type}</p>
            <h3 className="mt-2 text-2xl font-semibold leading-tight text-ink">{project.title}</h3>
          </div>
          <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-ink transition duration-300 group-hover:-translate-y-0.5 group-hover:border-slate-300 group-hover:bg-slate-50">
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-muted">{project.shortDescription}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-slate-600"
          >
            View case study
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
