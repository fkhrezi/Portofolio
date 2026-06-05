import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectImageFrameProps = {
  src?: string;
  alt: string;
  priority?: boolean;
  variant?: "featured" | "card" | "hero";
  className?: string;
};

const variantStyles = {
  featured: "aspect-[1.28/1] min-h-[360px] lg:aspect-auto lg:h-full",
  card: "aspect-[1.45/1]",
  hero: "aspect-[1.55/1] sm:aspect-[1.85/1]",
};

export function ProjectImageFrame({
  src,
  alt,
  priority = false,
  variant = "card",
  className,
}: ProjectImageFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-slate-200 bg-[linear-gradient(145deg,#ffffff_0%,#f5f7fa_50%,#edf2f7_100%)] shadow-hairline",
        variantStyles[variant],
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 z-10 flex h-10 items-center gap-2 border-b border-white/70 bg-white/58 px-4 backdrop-blur">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300/75" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300/55" />
      </div>

      {src ? (
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          priority={priority}
          className="h-full w-full object-contain px-4 pb-4 pt-12 transition duration-500 group-hover:scale-[1.018] sm:px-6 sm:pb-6"
          sizes={
            variant === "featured"
              ? "(min-width: 1024px) 52vw, 100vw"
              : variant === "hero"
                ? "(min-width: 1024px) 1100px, 100vw"
                : "(min-width: 1024px) 50vw, 100vw"
          }
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center px-8 pt-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-400 shadow-hairline">
            <ImageIcon aria-hidden="true" className="h-5 w-5" />
          </div>
          <p className="mt-4 text-sm font-medium text-slate-500">Project visual coming soon</p>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/70" />
    </div>
  );
}
