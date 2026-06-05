import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
  external?: boolean;
  download?: boolean;
  disabled?: boolean;
};

const variantStyles = {
  primary:
    "border-ink bg-ink text-white hover:-translate-y-0.5 hover:bg-black hover:shadow-soft",
  secondary:
    "border-line bg-white/86 text-ink hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-soft",
  ghost: "border-transparent bg-transparent text-ink hover:bg-slate-100",
};

export function LinkButton({
  href,
  children,
  className,
  variant = "secondary",
  icon,
  external = false,
  download = false,
  disabled = false,
}: LinkButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-300",
    variantStyles[variant],
    disabled && "pointer-events-none cursor-not-allowed opacity-50",
    className,
  );

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {external ? <ArrowUpRight aria-hidden="true" className="h-4 w-4" /> : null}
    </>
  );

  if (!href || disabled) {
    return (
      <span aria-disabled="true" className={classes}>
        {content}
      </span>
    );
  }

  return (
    <Link
      className={classes}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
    >
      {content}
    </Link>
  );
}
