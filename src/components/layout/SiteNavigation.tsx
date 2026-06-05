"use client";

import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";
import { FileText, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export function SiteNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/78 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
            FF
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:block">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-muted transition hover:bg-slate-100 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className="focus-ring ml-2 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink shadow-hairline transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-soft"
          >
            <FileText aria-hidden="true" className="h-4 w-4" />
            Resume
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink shadow-hairline lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid border-t border-line/70 bg-white/94 transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-lg px-3 py-3 text-sm font-semibold text-ink transition hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/resume"
              className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-line bg-ink px-4 py-3 text-sm font-semibold text-white"
            >
              <FileText aria-hidden="true" className="h-4 w-4" />
              Resume
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
