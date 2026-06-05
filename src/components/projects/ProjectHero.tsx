import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { LinkButton } from "@/components/ui/LinkButton";
import { Container } from "@/components/ui/Container";
import { ProjectImageFrame } from "@/components/projects/ProjectImageFrame";
import { ProjectMetaCard } from "@/components/projects/ProjectMetaCard";
import { ProjectTag } from "@/components/projects/ProjectTag";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="soft-gradient border-b border-line py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.38fr] lg:items-end">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.category.map((category) => (
                <ProjectTag key={category}>{category}</ProjectTag>
              ))}
            </div>

            <p className="text-sm font-semibold uppercase text-accent-blue">Project Case Study</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-ink sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{project.shortDescription}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton href="/projects" icon={<ArrowLeft aria-hidden="true" className="h-4 w-4" />}>
                Back to Projects
              </LinkButton>
              {project.demoUrl ? (
                <LinkButton
                  href={project.demoUrl}
                  variant="primary"
                  external
                  icon={<ExternalLink aria-hidden="true" className="h-4 w-4" />}
                >
                  View Live Demo
                </LinkButton>
              ) : null}
              {project.githubUrl ? (
                <LinkButton
                  href={project.githubUrl}
                  external
                  icon={<Github aria-hidden="true" className="h-4 w-4" />}
                >
                  View GitHub
                </LinkButton>
              ) : null}
            </div>
          </div>

          <ProjectMetaCard project={project} />
        </div>

        <div className="mt-12">
          <ProjectImageFrame
            src={project.heroImage ?? project.image}
            alt={`${project.title} case study visual`}
            variant="hero"
            priority
            className="shadow-[0_24px_100px_rgba(15,23,42,0.1)]"
          />
        </div>
      </Container>
    </section>
  );
}
