import { Download, Github, Linkedin, Mail } from "lucide-react";
import { LinkButton } from "@/components/ui/LinkButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <SectionShell id="contact" className="soft-gradient border-t border-line">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader
          eyebrow="Contact"
          title="Open to internships, projects, collaborations, and product conversations."
          description="For recruiters, lecturers, clients, judges, and communities, the best way to reach me is through email."
          align="center"
        />
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <LinkButton href={`mailto:${profile.email}`} variant="primary" icon={<Mail aria-hidden="true" className="h-4 w-4" />}>
            Email Me
          </LinkButton>
          <LinkButton href={profile.cvPath} download icon={<Download aria-hidden="true" className="h-4 w-4" />}>
            Download CV
          </LinkButton>
          <LinkButton
            href={profile.links.linkedin || undefined}
            external={Boolean(profile.links.linkedin)}
            disabled={!profile.links.linkedin}
            icon={<Linkedin aria-hidden="true" className="h-4 w-4" />}
          >
            LinkedIn
          </LinkButton>
          {profile.links.github ? (
            <LinkButton href={profile.links.github} external icon={<Github aria-hidden="true" className="h-4 w-4" />}>
              GitHub
            </LinkButton>
          ) : null}
        </div>
      </div>
    </SectionShell>
  );
}
