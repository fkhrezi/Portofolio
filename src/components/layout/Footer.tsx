import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link className="transition hover:text-ink" href="/#projects">
            Projects
          </Link>
          <Link className="transition hover:text-ink" href="/resume">
            Resume
          </Link>
          <Link className="transition hover:text-ink" href="/#contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
