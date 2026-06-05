import { cn } from "@/lib/utils";

type ProjectSectionProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function ProjectSection({ eyebrow, title, children, className }: ProjectSectionProps) {
  return (
    <section className={cn("rounded-lg border border-slate-200 bg-white p-6 shadow-hairline sm:p-8", className)}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase text-accent-blue">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
