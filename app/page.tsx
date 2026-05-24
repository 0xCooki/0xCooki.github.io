export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="w-full max-w-xl space-y-6 text-center sm:text-left">
        <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
          Personal site
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          0xCooki
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Welcome. Edit{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
            app/page.tsx
          </code>{" "}
          to build out your home page.
        </p>
      </div>
    </main>
  );
}
