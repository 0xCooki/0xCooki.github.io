type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <main
      className={`mx-auto w-full max-w-5xl flex-1 px-6 py-12 sm:py-16 ${className}`}
    >
      {children}
    </main>
  );
}
