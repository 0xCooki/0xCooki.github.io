import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Software Engineering · Cooki",
  description: "Software engineering experience, projects, and skills.",
};

export default function SoftwareEngineeringPage() {
  return (
    <PageShell>
      <div className="max-w-3xl space-y-10">
        <header className="space-y-3">
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            Software Engineering
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Building Secure Crypto-Economic Systems
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            A summary of my smart contract engineering experience
          </p>
        </header>

        <section className="space-y-6 border-t border-border pt-10">
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            Experience
          </h2>
          <div className="space-y-8">
            <article className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-foreground">Onchain Team Lead</h3>
                <span className="text-sm text-muted">2025 — Present</span>
              </div>
              <p className="text-sm text-accent-muted">
                <a href="https://wonderland.xyz/" className="hover:underline">
                  Wonderland · Remote (UK)
                </a>
              </p>
              <p className="leading-relaxed text-muted">
                At Wonderland, I directed a high-performing engineering team through the full 
                development lifecycle to build an interoperable, multi-chain, decentralized product suite. 
                Beyond product delivery, I pioneered the integration of LLM-enhanced workflows to 
                accelerate velocity while ensuring rigorous security standards were maintained, and 
                coordinated closely with external auditors to deliver the highest levels of onchain integrity.
              </p>
            </article>

            <article className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-foreground">Senior Solidity Engineer</h3>
                <span className="text-sm text-muted">2024 — 2025</span>
              </div>
              <p className="text-sm text-accent-muted">
                <a href="https://clearpool.finance/" className="hover:underline">
                Clearpool Finance · Remote (Aus)
                </a>
              </p>
              <p className="leading-relaxed text-muted">
                In this role I spearheaded development of core company products, including a set of Liquidity 
                Generation Event (LGE) contracts and a yield-bearing stablecoin. I also collaborated
                closely with third-party teams such as Layer Zero, Aerodrome, and Lido to help realise
                Clearpool&apos;s vision and align technical solutions with strategic goals.
              </p>
            </article>
          </div>

          <article className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-foreground">Freelance Solidity Developer</h3>
                <span className="text-sm text-muted">2022 — 2024</span>
              </div>
              <p className="text-sm text-accent-muted">
                <a href="https://infinex.xyz/" className="hover:underline">
                  Various Organisations · Remote (Aus)
                </a>
              </p>
              <p className="leading-relaxed text-muted">
                Throughout my time as a PhD student I worked directly with several teams to design,
                build, and deploy robust smart contract systems tailored to meet client needs.
                This entailed delivering end-to-end solutions, from consultation and contract development
                to comprehensive testing and iterative deployment. Clients included Synthetix/Infinex,
                Aelin DAO, Based Bits, Hashes DAO, and Dawn Protocol.
              </p>
            </article>
        </section>

        <section className="space-y-4 border-t border-border pt-10">
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            Skills & tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Solidity",
              "Typescript",
              "Go",
              "Foundry",
              "Hardhat",
              "Systems Design",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
