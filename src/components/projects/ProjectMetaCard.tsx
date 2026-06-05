import { Calendar, Clock3, Layers3, Sparkles, UserRound } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectMetaCardProps = {
  project: Project;
};

export function ProjectMetaCard({ project }: ProjectMetaCardProps) {
  const items = [
    {
      label: "Type",
      value: project.type,
      icon: Layers3,
    },
    {
      label: "Status",
      value: project.status,
      icon: Sparkles,
    },
    {
      label: "Year",
      value: project.year,
      icon: Calendar,
    },
    {
      label: "My Role",
      value: project.role,
      icon: UserRound,
    },
    ...(project.duration
      ? [
          {
            label: "Duration",
            value: project.duration,
            icon: Clock3,
          },
        ]
      : []),
  ];

  return (
    <aside className="rounded-lg border border-slate-200 bg-white/82 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur">
      <p className="text-sm font-semibold text-ink">Project Snapshot</p>
      <dl className="mt-6 space-y-5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label}>
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-500">
                <Icon aria-hidden="true" className="h-4 w-4" />
                {item.label}
              </dt>
              <dd className="mt-2 text-sm font-semibold leading-6 text-ink">{item.value}</dd>
            </div>
          );
        })}
      </dl>
    </aside>
  );
}
