"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IDENTITIES = [
  {
    id: "cooki",
    name: "Cooki",
    image: "/images/Cooki.jpeg",
    alt: "Cooki",
  },
  {
    id: "william",
    name: "William Ridge",
    image: "/images/William.jpeg",
    alt: "William Ridge",
  },
] as const;

type IdentityId = (typeof IDENTITIES)[number]["id"];

const TYPE_MS = 85;
const DELETE_MS = 55;
const HOLD_MS = 5000;

export function IntroHero() {
  const [text, setText] = useState("");
  const [activeId, setActiveId] = useState<IdentityId>("cooki");

  useEffect(() => {
    let cancelled = false;
    const timeouts = new Set<ReturnType<typeof setTimeout>>();

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = setTimeout(resolve, ms);
        timeouts.add(id);
      });

    async function loop() {
      while (!cancelled) {
        for (const { id, name } of IDENTITIES) {
          setActiveId(id);

          for (let i = 1; i <= name.length; i++) {
            if (cancelled) return;
            setText(name.slice(0, i));
            await wait(TYPE_MS);
          }

          await wait(HOLD_MS);
          if (cancelled) return;

          for (let i = name.length - 1; i >= 0; i--) {
            if (cancelled) return;
            setText(name.slice(0, i));
            await wait(DELETE_MS);
          }
        }
      }
    }

    void loop();

    return () => {
      cancelled = true;
      for (const id of timeouts) clearTimeout(id);
    };
  }, []);

  return (
    <section className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-4">
        <p className="text-sm font-medium tracking-widest text-accent uppercase">
          About
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Hi, I&apos;m{" "}
          <span className="inline text-accent">
            {text}
            <span className="typing-cursor" aria-hidden="true">
              |
            </span>
          </span>
          <span className="sr-only">Cooki, also known as William Ridge</span>
        </h1>
        <p className="text-lg leading-relaxed text-muted">
          I work at the cutting edge of crypto-economic research and engineering,
          building reliable systems with a focus on flawless security and adversarial 
          resilience. I pride myself on applying academic depth to practical challenges,
          and I invite you to navigate my interactive portfolio to see how this 
          manifests in my work.
        </p>
      </div>

      <div className="relative mx-auto aspect-square w-36 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface sm:mx-0 sm:w-44">
        {IDENTITIES.map(({ id, image, alt }) => (
          <Image
            key={id}
            src={image}
            alt={alt}
            fill
            priority
            sizes="(max-width: 640px) 144px, 176px"
            className={`object-cover transition-opacity duration-500 ${
              activeId === id ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
