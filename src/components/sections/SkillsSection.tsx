import { CheckCircle2 } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

export function SkillsSection() {
  return (
    <SectionShell id="skills" className="border-y border-line bg-surface">
      <SectionHeader
        eyebrow="Skills"
        title="Grouped by practical use, not percentages."
        description="The goal is to communicate current capability clearly while leaving room for visible growth."
        align="center"
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-lg border border-line bg-white p-6 shadow-hairline">
            <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{group.description}</p>
            <ul className="mt-6 space-y-3">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-green" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
