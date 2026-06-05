import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { certifications } from "@/data/certifications";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

export function CertificationsSection() {
  return (
    <SectionShell id="certifications" className="border-y border-line bg-surface">
      <SectionHeader
        eyebrow="Certifications"
        title="Courses and learning milestones."
        description="A modular section for certifications, independent learning, and course credentials as the portfolio grows."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((item) => (
          <article key={item.title} className="rounded-lg border border-line bg-white p-5 shadow-hairline">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-accent-blue">
              <Award aria-hidden="true" className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium text-muted">{item.year}</p>
            <h3 className="mt-2 text-base font-semibold leading-6 text-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{item.issuer}</p>
            {item.credentialUrl ? (
              <Link
                href={item.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent-blue"
              >
                Credential
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
