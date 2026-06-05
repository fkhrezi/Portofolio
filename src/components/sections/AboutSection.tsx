import { LayoutDashboard, LineChart, PenTool, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionShell } from "@/components/ui/SectionShell";

const focusAreas = [
  {
    title: "Web Development",
    description: "Building clean digital experiences with attention to structure and usability.",
    icon: LayoutDashboard,
  },
  {
    title: "Business Analysis",
    description: "Understanding problems, users, processes, and practical product requirements.",
    icon: LineChart,
  },
  {
    title: "UI/UX Design",
    description: "Designing calm interfaces that make information easier to use and trust.",
    icon: PenTool,
  },
  {
    title: "AI Products",
    description: "Exploring AI-assisted workflows and products that support real user goals.",
    icon: Sparkles,
  },
];

export function AboutSection() {
  return (
    <SectionShell id="about" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <SectionHeader
          eyebrow="About"
          title="A student portfolio built around practical problem solving."
          description="I am an Information System student at Bina Nusantara University with an interest in turning real-world problems into clear, usable digital solutions."
        />
        <div>
          <p className="text-lg leading-8 text-muted">
            My work sits between business analysis, UI/UX design, web development, and
            AI-powered product exploration. I enjoy learning how a problem becomes a product:
            identifying user needs, shaping the flow, designing the interface, and building
            prototypes that can be tested, explained, and improved.
          </p>
          <p className="mt-5 text-lg leading-8 text-muted">
            This portfolio is designed to document that growth clearly for internships,
            academic projects, competitions, freelance opportunities, and future product work.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((area) => {
          const Icon = area.icon;

          return (
            <article key={area.title} className="rounded-lg border border-line bg-surface p-5">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-accent-blue shadow-hairline">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </div>
              <h3 className="text-base font-semibold text-ink">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{area.description}</p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
