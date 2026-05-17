import { createFileRoute } from "@tanstack/react-router";
import { ForensicNav } from "@/components/forensic-nav";
import {
  Download,
  FileText,
  FileJson,
  FileImage,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Share2,
  Lock,
} from "lucide-react";

export const Route = createFileRoute("/reports")({
  component: Reports,
  head: () => ({
    meta: [
      { title: "Forensic Reports — UkweliGuard AI" },
      { name: "description", content: "Download tamper-evident forensic reports and export structured evidence." },
    ],
  }),
});

const reports = [
  {
    case: "UG-2026-0184",
    title: "evidence_clip_184.mp4",
    verdict: "Manipulated",
    confidence: "98.4%",
    icon: ShieldAlert,
    tone: "destructive",
    date: "May 17, 2026 · 14:08",
  },
  {
    case: "UG-2026-0183",
    title: "rally_speech_dsm.mov",
    verdict: "Authentic",
    confidence: "96.1%",
    icon: CheckCircle2,
    tone: "accent",
    date: "May 16, 2026 · 22:41",
  },
  {
    case: "UG-2026-0182",
    title: "interview_cut_b.mp4",
    verdict: "Traditional Edit",
    confidence: "89.7%",
    icon: AlertTriangle,
    tone: "primary",
    date: "May 15, 2026 · 09:12",
  },
];

const tones: Record<string, string> = {
  destructive: "text-destructive border-destructive/40 bg-destructive/10",
  accent: "text-accent border-accent/40 bg-accent/10",
  primary: "text-primary border-primary/40 bg-primary/10",
};

function Reports() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ForensicNav />
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Archive · Tamper-evident
            </div>
            <h1 className="text-3xl font-bold tracking-tight mt-1">Forensic Reports</h1>
          </div>
          <div className="flex gap-2 font-mono text-[10px] uppercase tracking-wider">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-card border border-border rounded-sm">
              <Lock className="size-3" /> SHA-256 sealed
            </span>
            <span className="px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded-sm">
              v0.84
            </span>
          </div>
        </header>

        {/* Export options */}
        <section className="grid md:grid-cols-4 gap-3">
          {[
            { icon: FileText, label: "PDF Report", note: "Court-ready dossier" },
            { icon: FileJson, label: "JSON Evidence", note: "Machine-readable bundle" },
            { icon: FileImage, label: "Frame Pack", note: "Heatmaps + extracted ROIs" },
            { icon: Share2, label: "Shareable Link", note: "Read-only, expires 7d" },
          ].map((o) => (
            <button
              key={o.label}
              className="text-left border border-border bg-card/40 p-4 rounded-sm hover:bg-card/70 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <o.icon className="size-5 text-primary" />
                <Download className="size-3.5 text-muted-foreground group-hover:text-foreground" />
              </div>
              <div className="font-semibold mt-3">{o.label}</div>
              <div className="text-xs text-muted-foreground">{o.note}</div>
            </button>
          ))}
        </section>

        {/* Evidence cards */}
        <section className="space-y-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Recent evidence
          </div>
          {reports.map((r) => (
            <article
              key={r.case}
              className="grid md:grid-cols-[180px_1fr_auto] gap-4 items-center border border-border bg-card/40 rounded-sm p-4"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Case
                </div>
                <div className="font-mono text-sm">{r.case}</div>
                <div className="text-[11px] text-muted-foreground mt-1">{r.date}</div>
              </div>
              <div>
                <div className="font-semibold">{r.title}</div>
                <div className="mt-2 inline-flex items-center gap-2 text-[11px] font-mono">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-sm border ${tones[r.tone]}`}>
                    <r.icon className="size-3" /> {r.verdict}
                  </span>
                  <span className="text-muted-foreground">confidence · {r.confidence}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs rounded-sm hover:bg-card/70">
                  View
                </button>
                <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 text-xs font-semibold rounded-sm">
                  <Download className="size-3" /> PDF
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* Chain of custody */}
        <section className="border border-border bg-card/40 rounded-sm p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Chain of custody · UG-2026-0184
          </div>
          <ol className="mt-3 space-y-2 text-sm font-mono">
            <li className="flex justify-between border-b border-border/60 pb-2">
              <span>14:07:42 · ingest</span>
              <span className="text-muted-foreground">sha256 9f2c…a8e1</span>
            </li>
            <li className="flex justify-between border-b border-border/60 pb-2">
              <span>14:07:54 · analysis started</span>
              <span className="text-muted-foreground">node · dar-es-salaam-01</span>
            </li>
            <li className="flex justify-between border-b border-border/60 pb-2">
              <span>14:08:07 · verdict sealed</span>
              <span className="text-destructive">manipulated · 98.4%</span>
            </li>
            <li className="flex justify-between">
              <span>14:08:09 · report signed</span>
              <span className="text-muted-foreground">ed25519 · ukweliguard-labs</span>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}