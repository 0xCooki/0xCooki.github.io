import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Contact · Cooki",
  description: "Get in touch and find me online.",
};

const links = [
  {
    label: "Email",
    value: "william.ridge.95@gmail.com",
    href: "mailto:william.ridge.95@gmail.com",
    icon: null,
  },
  {
    label: "GitHub",
    value: "github.com/0xCooki",
    href: "https://github.com/0xCooki",
    icon: null,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/william-ridge",
    href: "https://www.linkedin.com/in/william-r-137648306/",
    icon: null,
  },
  {
    label: "Farcaster",
    value: "farcaster.xyz/cooki",
    href: "https://farcaster.xyz/cooki",
    icon: null,
  },
] as const;

export default function ContactPage() {
  return (
    <PageShell>
      <div className="max-w-3xl space-y-10">
        <header className="space-y-3">
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            Contact
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s Connect
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            Open to conversations about engineering, research, collaboration,
            and all kinds of interesting problems.
          </p>
        </header>

        <section className="space-y-4 border-t border-border pt-10">
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            Reach me
          </h2>
          <ul className="divide-y divide-border rounded-lg border border-border bg-surface">
            {links.map(({ label, value, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-surface-raised sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="flex items-center gap-2.5 text-sm font-medium text-muted">
                    {icon ? (
                      <Image
                        src={icon}
                        alt=""
                        width={18}
                        height={18}
                        className="opacity-80"
                      />
                    ) : null}
                    {label}
                  </span>
                  <span className="text-foreground hover:text-accent">
                    {value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3 border-t border-border pt-10">
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            Trivia
          </h2>
          <p className="leading-relaxed text-muted">
            Australian living in the Scotland. Loves long hikes in nature almost as much as Pokémon.
            Favourite philosophers are Dostoevsky and Dennett. Trying and failing to learn Spanish 
            for many years now, <em>así va</em>. 
          </p>
        </section>
      </div>
    </PageShell>
  );
}
