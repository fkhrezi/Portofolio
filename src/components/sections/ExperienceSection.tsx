import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" className="border-y border-line bg-surface">
      <SectionHeader
        eyebrow="Experience"
        title="Project experience shaped for future professional work."
        description="This section is ready for internships, organizations, freelance work, competitions, and professional roles as they are added over time."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {experience.map((item) => (
          <article key={`${item.role}-${item.organization}`} className="rounded-lg border border-line bg-white p-6 shadow-hairline">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-accent-blue">
                <BriefcaseBusiness aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted">{item.period}</p>
                <h3 className="mt-1 text-xl font-semibold text-ink">{item.role}</h3>
                <p className="mt-1 text-sm font-semibold text-accent-blue">{item.organization}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-muted">{item.description}</p>
            <ul className="mt-5 space-y-3">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-green" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
