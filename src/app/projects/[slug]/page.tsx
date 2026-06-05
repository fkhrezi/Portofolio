import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { FeatureList } from "@/components/projects/FeatureList";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ProjectSection } from "@/components/projects/ProjectSection";
import { ProjectSidebar } from "@/components/projects/ProjectSidebar";
import { ProjectTag } from "@/components/projects/ProjectTag";
import { projects, getProjectBySlug } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found — Fakhri Fahrezi",
    };
  }

  return {
    title: `${project.title} — Fakhri Fahrezi`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="bg-white">
      <ProjectHero project={project} />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.68fr_0.32fr]">
          <div className="space-y-6">
            <ProjectSection eyebrow="01" title="Overview">
              <p className="text-base leading-8 text-muted">{project.overview}</p>
            </ProjectSection>

            <ProjectSection eyebrow="02" title="Problem">
              <p className="text-base leading-8 text-muted">{project.problem}</p>
            </ProjectSection>

            <ProjectSection eyebrow="03" title="Solution">
              <p className="text-base leading-8 text-muted">{project.solution}</p>
            </ProjectSection>

            <ProjectSection eyebrow="04" title="Key Features">
              <FeatureList features={project.features} />
            </ProjectSection>

            <ProjectSection eyebrow="05" title="My Role">
              <p className="text-base leading-8 text-muted">
                I contributed to this project through a student-level product building lens,
                focusing on clear problem framing, feature structure, and practical interface
                decisions without overextending the scope beyond the prototype or concept stage.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.roleDetails.map((role) => (
                  <ProjectTag key={role}>{role}</ProjectTag>
                ))}
              </div>
            </ProjectSection>

            <ProjectSection eyebrow="06" title="Tech Stack / Tools">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tool) => (
                  <ProjectTag key={tool}>{tool}</ProjectTag>
                ))}
              </div>
            </ProjectSection>

            <ProjectSection eyebrow="07" title="What I Learned">
              <CaseStudyList items={project.learnings} />
            </ProjectSection>

            <ProjectSection eyebrow="08" title="Next Steps">
              <CaseStudyList items={project.nextSteps} />
            </ProjectSection>
          </div>

          <ProjectSidebar project={project} />
        </div>
      </Container>
    </article>
  );
}

function CaseStudyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-muted">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
