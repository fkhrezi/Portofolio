import { cn } from "@/lib/utils";

type ProjectTagProps = {
  children: React.ReactNode;
  tone?: "light" | "solid";
  className?: string;
};

export function ProjectTag({ children, tone = "light", className }: ProjectTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tone === "solid"
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-200 bg-white/82 text-slate-600 shadow-hairline",
        className,
      )}
    >
      {children}
    </span>
  );
}
