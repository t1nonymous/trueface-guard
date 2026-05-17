import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Overview" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/results", label: "Results" },
  { to: "/explainability", label: "Explainability" },
  { to: "/reports", label: "Reports" },
] as const;

export function ForensicNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-6 bg-primary rounded-sm" />
          <span className="font-medium tracking-tight text-lg">
            UKWELI<span className="text-muted-foreground">GUARD</span>
          </span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={
                pathname === l.to
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded uppercase tracking-wider">
          Node: Dar Es Salaam
        </span>
        <Link
          to="/dashboard"
          className="bg-foreground text-background px-4 py-1.5 text-sm font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Launch Analysis
        </Link>
      </div>
    </nav>
  );
}