import Link from "next/link";
import { IntroHero } from "./components/IntroHero";
import { PageShell } from "./components/PageShell";

export default function Home() {
  return (
    <PageShell>
      <div className="max-w-3xl space-y-10">
        <IntroHero />

        <section className="space-y-4 border-t border-border pt-10">
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            In brief
          </h2>
          <ul className="space-y-3 text-muted">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Solidity engineer focused on elegant architecture, clean
                incentives, and delivering systems that meaningfully improve the world.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Academic background that shapes how I reason about problems; theoretical rigour
                paired with practical trade-offs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                Curious, collaborative, and happiest when the work is both
                technically innovative and genuinely useful.
              </span>
            </li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
