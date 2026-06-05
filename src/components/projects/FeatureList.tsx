import type { Project } from "@/data/projects";

type FeatureListProps = {
  features: Project["features"];
};

export function FeatureList({ features }: FeatureListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((feature, index) => (
        <article key={feature.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-ink shadow-hairline">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-5 text-lg font-semibold text-ink">{feature.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
        </article>
      ))}
    </div>
  );
}
