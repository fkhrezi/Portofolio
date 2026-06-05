import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectImageFrame } from "@/components/projects/ProjectImageFrame";
import { ProjectTag } from "@/components/projects/ProjectTag";

type FeaturedProjectCardProps = {
  project: Project;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article className="group rounded-lg border border-slate-200 bg-white p-3 shadow-[0_24px_90px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_30px_110px_rgba(15,23,42,0.11)]">
      <div className="grid overflow-hidden rounded-lg bg-[linear-gradient(145deg,#fafafa_0%,#f5f7fa_48%,#eef2f7_100%)] lg:grid-cols-[1.06fr_0.94fr]">
        <Link href={`/projects/${project.slug}`} className="block p-3 sm:p-5 lg:min-h-[520px]">
          <ProjectImageFrame
            src={project.image}
            alt={`${project.title} project preview`}
            priority
            variant="featured"
            className="h-full"
          />
        </Link>

        <div className="flex flex-col px-6 pb-7 pt-3 sm:px-8 sm:pb-9 lg:px-10 lg:py-10">
          <div className="flex flex-wrap items-center gap-2">
            <ProjectTag tone="solid">Featured Case Study</ProjectTag>
            <ProjectTag>{project.status}</ProjectTag>
            <ProjectTag>{project.year}</ProjectTag>
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold text-slate-500">{project.type}</p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-5 text-base leading-8 text-muted">{project.shortDescription}</p>
          </div>

          <ul className="mt-7 space-y-3">
            {project.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-slate-900" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <ProjectTag key={tag}>{tag}</ProjectTag>
            ))}
          </div>

          <div className="mt-auto pt-9">
            <Link
              href={`/projects/${project.slug}`}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-soft"
            >
              Read the case study
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
