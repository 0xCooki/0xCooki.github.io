"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/software-engineering", label: "Software Engineering" },
  { href: "/academia", label: "Academia" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="shrink-0 text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          William Ridge - Cooki
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "rounded-md px-2.5 py-2 text-sm font-medium transition-colors sm:px-3",
                  isActive
                    ? "bg-surface-raised text-foreground"
                    : "text-muted hover:bg-surface hover:text-foreground",
                ].join(" ")}
              >
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">
                  {label === "Software Engineering"
                    ? "Engineering"
                    : label === "Contact"
                      ? "Contact"
                      : "Academia"}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
