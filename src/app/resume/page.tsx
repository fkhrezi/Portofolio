import type { Metadata } from "next";
import { Download, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { achievements } from "@/data/achievements";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Resume — Fakhri Fahrezi",
  description:
    "Online resume of Fakhri Fahrezi, an Information System student focused on web development, business analysis, UI/UX, and AI-powered digital products.",
};

export default function ResumePage() {
  return (
    <div className="bg-white">
      <section className="soft-gradient border-b border-line py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.36fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-accent-blue">Online Resume</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-ink">{profile.tagline}</p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
                Information System student focused on web development, business analysis,
                UI/UX design, and AI-powered digital products.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <LinkButton href={profile.cvPath} variant="primary" download icon={<Download aria-hidden="true" className="h-4 w-4" />}>
                Download CV
              </LinkButton>
              <LinkButton href={`mailto:${profile.email}`} icon={<Mail aria-hidden="true" className="h-4 w-4" />}>
                Email Contact
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
          <aside className="space-y-6">
            <ResumePanel title="Contact">
              <p className="flex items-center gap-2 text-sm text-muted">
                <MapPin aria-hidden="true" className="h-4 w-4" />
                {profile.location}
              </p>
              <a className="mt-3 inline-flex text-sm font-semibold text-accent-blue hover:text-ink" href={`mailto:${profile.email}`}>
                Email Me
              </a>
            </ResumePanel>

            <ResumePanel title="Education">
              <h3 className="text-base font-semibold text-ink">{education.school}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{education.program}</p>
              <p className="mt-1 text-sm text-muted">{education.location}</p>
            </ResumePanel>

            <ResumePanel title="Skills">
              <div className="space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ResumePanel>
          </aside>

          <div className="space-y-8">
            <ResumePanel title="Profile Summary">
              <p className="text-base leading-8 text-muted">
                I am an Information System student who enjoys connecting business problems,
                user needs, interface design, and technology into practical digital solutions.
                My current portfolio focuses on student-level product work, AI-assisted
                prototyping, UI/UX planning, and clear case study documentation.
              </p>
            </ResumePanel>

            <ResumePanel title="Projects">
              <div className="space-y-5">
                {projects.map((project) => (
                  <article key={project.slug} className="border-b border-line pb-5 last:border-0 last:pb-0">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                      <p className="text-sm font-medium text-muted">{project.year}</p>
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent-blue">{project.role}</p>
                    <p className="mt-3 text-sm leading-6 text-muted">{project.shortDescription}</p>
                  </article>
                ))}
              </div>
            </ResumePanel>

            <ResumePanel title="Experience">
              <div className="space-y-5">
                {experience.map((item) => (
                  <article key={`${item.role}-${item.organization}`} className="border-b border-line pb-5 last:border-0 last:pb-0">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-lg font-semibold text-ink">{item.role}</h3>
                      <p className="text-sm font-medium text-muted">{item.period}</p>
                    </div>
                    <p className="mt-1 text-sm font-medium text-accent-blue">{item.organization}</p>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                  </article>
                ))}
              </div>
            </ResumePanel>

            <ResumePanel title="Achievements">
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <article key={achievement.title}>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-base font-semibold text-ink">{achievement.title}</h3>
                      <p className="text-sm font-medium text-muted">{achievement.year}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted">{achievement.description}</p>
                  </article>
                ))}
              </div>
            </ResumePanel>

            <ResumePanel title="Certifications / Courses">
              <div className="grid gap-4 sm:grid-cols-2">
                {certifications.map((item) => (
                  <article key={item.title}>
                    <h3 className="text-base font-semibold leading-6 text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted">{item.issuer} · {item.year}</p>
                  </article>
                ))}
              </div>
            </ResumePanel>
          </div>
        </div>
      </Container>
    </div>
  );
}

function ResumePanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-line bg-white p-6 shadow-hairline">
      <h2 className="mb-5 text-xl font-semibold text-ink">{title}</h2>
      {children}
    </section>
  );
}
