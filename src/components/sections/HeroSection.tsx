import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section id="home" className="soft-gradient overflow-hidden border-b border-line">
      <Container className="pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-rise">
            <Badge className="mb-6">
              <MapPin aria-hidden="true" className="mr-2 h-3.5 w-3.5" />
              {profile.location} · {profile.university}
            </Badge>
            <p className="text-sm font-semibold uppercase text-accent-blue">
              Portfolio
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.04] text-ink sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-2xl font-medium leading-snug text-ink sm:text-3xl">
              {profile.tagline}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              I am an Information System student interested in building useful digital products
              through web development, business analysis, UI/UX design, and AI-assisted workflows.
            </p>
          </div>

          <div className="mt-9 flex animate-rise flex-col justify-center gap-3 sm:flex-row" style={{ animationDelay: "120ms" }}>
            <LinkButton href="/#projects" variant="primary" icon={<ArrowRight aria-hidden="true" className="h-4 w-4" />}>
              View Projects
            </LinkButton>
            <LinkButton href={profile.cvPath} download icon={<Download aria-hidden="true" className="h-4 w-4" />}>
              Download CV
            </LinkButton>
            <LinkButton href={`mailto:${profile.email}`} icon={<Mail aria-hidden="true" className="h-4 w-4" />}>
              Contact Me
            </LinkButton>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3">
          {[
            ["Focus", "Business analysis, UI/UX, and AI product thinking"],
            ["Approach", "Problem-first, practical, and documentation-friendly"],
            ["Direction", "Internship-ready portfolio with room to grow"],
          ].map(([title, description], index) => (
            <div
              key={title}
              className="animate-rise rounded-lg border border-line bg-white/76 p-5 shadow-hairline backdrop-blur"
              style={{ animationDelay: `${180 + index * 80}ms` }}
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-accent-blue">
                <Sparkles aria-hidden="true" className="h-4 w-4" />
              </div>
              <h2 className="text-sm font-semibold uppercase text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
