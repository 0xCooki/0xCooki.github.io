import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "Academia · Cooki",
  description: "Academic background, research, and publications.",
};

export default function AcademiaPage() {
  return (
    <PageShell>
      <div className="max-w-3xl space-y-10">
        <header className="space-y-3">
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            Academia
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Research & Education
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            Degrees, research interests, and academic work
          </p>
        </header>

        <section className="space-y-6 border-t border-border pt-10">
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            Education
          </h2>

          <div className="space-y-8">
            <article className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-foreground">
                  PhD · Philosophy
                </h3>
                <span className="text-sm text-muted">2021-2024</span>
              </div>
              <p className="text-sm text-accent-muted">
                <a href="https://minerva-access.unimelb.edu.au/items/80934062-ba89-4481-a2d4-189bbd047ce5" className="hover:underline">
                  Melbourne University
                </a>
              </p>
              <p className="leading-relaxed text-muted">
                This thesis addresses the ontology and evolution of money. I argue 
                that the functional roles of money are evolving, and that this can be seen
                with the advent of crypto-monies. This work also addresses the rich history 
                of monies, encompassing insights from the era of Mesopotamian clay debt tablets 
                to the monetary reforms of the Russian revolution.
              </p>
            </article>
          </div>

          <div className="space-y-8">
            <article className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-foreground">
                  Masters · Philosophy
                </h3>
                <span className="text-sm text-muted">2018-2020</span>
              </div>
              <p className="text-sm text-accent-muted">
                <a href="https://bridges.monash.edu/articles/thesis/Sacred_Values_and_Collective_Action_Problems/13017722?file=24824243" className="hover:underline">
                  Monash University
                </a>
              </p>
              <p className="leading-relaxed text-muted">
                This thesis discusses collective action, social norms, and sacred values 
                (a unique kind of moral value). In this thesis I argue that sacred values 
                are structured so as to be particularly useful in the domain of collective 
                action problems.
              </p>
            </article>
          </div>

          <div className="space-y-8">
            <article className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-foreground">
                  Undergraduate · Mathematical Statistics
                </h3>
                <span className="text-sm text-muted">2014-2017</span>
              </div>
              <p className="text-sm text-accent-muted">
                <a href="https://www.monash.edu/" className="hover:underline">
                  Monash University
                </a>
              </p>
              <p className="leading-relaxed text-muted">
                Majored in Mathematical Statistics, minored in Physics.
              </p>
            </article>
          </div>

        </section>


        <section className="space-y-6 border-t border-border pt-10">
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            Publications
          </h2>

          <div className="space-y-8">
            <article className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-foreground">
                  Moral Commitments as Signals of Trustworthiness: Inferring Character from Sacred Values
                </h3>
                <span className="text-sm text-muted">2025</span>
              </div>
              <p className="text-sm text-accent-muted">
                <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5120222" className="hover:underline">
                  Ji Young Song · Andrew Corcoran · William Ridge · Toby Handfield
                </a>
              </p>
              <p className="leading-relaxed text-muted">
                Sacred value commitments—moral stances that categorically resist material 
                trade-offs—present a striking exception to the typical flexibility of human 
                decision-making. Across three pre-registered experiments (N = 804), we test 
                whether sacred value commitments serve as reliable signals that help solve a 
                fundamental social challenge: identifying genuinely trustworthy partners in 
                situations of uncertainty.
              </p>
            </article>
          </div>

          <div className="space-y-8">
            <article className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-foreground">
                  Response Playbook: Disinformation in the City
                </h3>
                <span className="text-sm text-muted">2024</span>
              </div>
              <p className="text-sm text-accent-muted">
                <a href="https://openresearch.amsterdam/en/page/114312/response-playbook-disinformation-in-the-city" className="hover:underline">
                  Ika Trijsburg · Helen Sullivan · Elise Park · Matteo Bonotti · Paul Costello · Zim Nwokora · Daniel Pejic · Mario Peucker · William Ridge
                </a>
              </p>
              <p className="leading-relaxed text-muted">
                In extraordinary times of rapid information production and sharing, distrust 
                and disruption, disinformation is having an increasing impact on cities. And 
                cities are, therefore, on the front line of disinformation response strategies.
              </p>
            </article>
          </div>

          <div className="space-y-8">
            <article className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-foreground">
                  Disaggregating Civility: Politeness, Public-Mindedness and Their Connection
                </h3>
                <span className="text-sm text-muted">2022</span>
              </div>
              <p className="text-sm text-accent-muted">
                <a href="https://www.cambridge.org/core/journals/british-journal-of-political-science/article/disaggregating-civility-politeness-publicmindedness-and-their-connection/15396519C895FD2ECB576CC6AA1424B8" className="hover:underline">
                  Aurélia Bardon · Matteo Bonotti · Steven T. Zech · William Ridge
                </a>
              </p>
              <p className="leading-relaxed text-muted">
                Calls for civility feature prominently in public discourse, and the concept has 
                received growing attention by political philosophers recently. But what does it 
                mean to be civil? The existing literature distinguishes between two main understandings 
                of civility: civility as politeness and civility as public-mindedness. The objective 
                of this article is to show that these conceptions and the different normative claims 
                associated with them can all fit together. 
              </p>
            </article>
          </div>

        </section> 

        <section className="space-y-4 border-t border-border pt-10">
          <h2 className="text-sm font-medium tracking-widest text-accent uppercase">
            Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Philosophy",
              "Evolution",
              "Economics",
              "Ethics",
              "Politics",
              "History",
              "Crypto Currency",
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
