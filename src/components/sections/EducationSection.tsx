import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/education";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

export function EducationSection() {
  return (
    <SectionShell id="education" className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation in information systems."
          description="A concise academic snapshot focused on program, university, and location."
        />
        <article className="rounded-lg border border-line bg-surface p-7 shadow-hairline">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-accent-blue shadow-hairline">
              <GraduationCap aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-ink">{education.school}</h3>
              <p className="mt-2 text-base font-medium text-slate-700">{education.program}</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                <MapPin aria-hidden="true" className="h-4 w-4" />
                {education.location}
              </p>
            </div>
          </div>
        </article>
      </div>
    </SectionShell>
  );
}
