import { createFileRoute, Link } from "@tanstack/react-router";
import { ForensicNav } from "@/components/forensic-nav";
import forensicFrame from "@/assets/forensic-frame.jpg";
import {
  ShieldAlert,
  AlertTriangle,
  Activity,
  Clock,
  Download,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/results")({
  component: Results,
  head: () => ({
    meta: [
      { title: "Analysis Results — UkweliGuard AI" },
      { name: "description", content: "Authenticity verdict, Grad-CAM heatmaps, and timeline of suspicious frames." },
    ],
  }),
});

const timeline = Array.from({ length: 32 }).map((_, i) => ({
  i,
  risk: [4, 9, 17, 18, 19, 24].includes(i)
    ? "high"
    : [7, 12, 22, 28].includes(i)
    ? "med"
    : "low",
}));

function Results() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ForensicNav />
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Case · UG-2026-0184 · evidence_clip_184.mp4
            </div>
            <h1 className="text-3xl font-bold tracking-tight mt-1">Forensic Verdict</h1>
          </div>
          <div className="flex gap-2">
            <Link to="/explainability" className="inline-flex items-center gap-2 border border-border px-3 py-2 text-sm rounded-sm hover:bg-card/60">
              Open Explainability <ArrowRight className="size-3.5" />
            </Link>
            <Link to="/reports" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-2 text-sm font-semibold rounded-sm">
              <Download className="size-3.5" /> Export Report
            </Link>
          </div>
        </header>

        {/* Verdict */}
        <section className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
          <div className="relative border border-destructive/40 rounded-sm overflow-hidden bg-gradient-to-br from-destructive/10 to-transparent p-6">
            <div className="flex items-start gap-4">
              <div className="size-14 rounded-sm bg-destructive/15 border border-destructive/40 flex items-center justify-center">
                <ShieldAlert className="size-7 text-destructive" />
              </div>
              <div className="flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-destructive">
                  Verdict
                </div>
                <div className="text-3xl font-bold tracking-tight mt-1">
                  Manipulated · Deepfake
                </div>
                <p className="text-sm text-muted-foreground mt-2 max-w-md">
                  Synthetic facial reenactment detected with traces of frame-level temporal inconsistency.
                </p>
              </div>
              <div className="text-right">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Confidence
                </div>
                <div className="text-5xl font-bold text-destructive tracking-tighter">
                  98.4<span className="text-2xl">%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Heatmap */}
          <div className="border border-border bg-card/40 rounded-sm overflow-hidden">
            <div className="border-b border-border px-4 py-3 flex items-center justify-between">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Grad-CAM · frame #00428
              </div>
              <span className="text-[10px] font-mono text-primary">attention overlay</span>
            </div>
            <div className="relative aspect-video">
              <img src={forensicFrame} alt="Forensic frame with heatmap" className="w-full h-full object-cover" />
              <div className="absolute top-[28%] left-[34%] size-32 rounded-full bg-destructive/40 blur-2xl heatmap-pulse" />
              <div className="absolute top-[40%] left-[44%] size-20 rounded-full bg-primary/50 blur-xl heatmap-pulse" />
              <div className="absolute inset-x-0 top-0 h-px bg-primary scan-line" />
            </div>
          </div>
        </section>

        {/* Analytics */}
        <section className="grid md:grid-cols-4 gap-3">
          {[
            { label: "Frames Analyzed", value: "1,842", icon: Activity },
            { label: "Suspect ROIs", value: "246", icon: AlertTriangle },
            { label: "Manip. Frames", value: "31.4%", icon: ShieldAlert },
            { label: "Runtime", value: "12.4s", icon: Clock },
          ].map((m) => (
            <div key={m.label} className="border border-border bg-card/40 p-4 rounded-sm">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                <m.icon className="size-3.5 text-accent" />
              </div>
              <div className="text-2xl font-bold mt-2 tracking-tight">{m.value}</div>
            </div>
          ))}
        </section>

        {/* Timeline */}
        <section className="border border-border bg-card/40 rounded-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Frame-by-frame timeline · 0:00 → 1:04
            </div>
            <div className="flex gap-3 text-[10px] font-mono">
              <span className="flex items-center gap-1"><span className="size-2 bg-accent rounded-sm" /> Authentic</span>
              <span className="flex items-center gap-1"><span className="size-2 bg-primary rounded-sm" /> Suspect</span>
              <span className="flex items-center gap-1"><span className="size-2 bg-destructive rounded-sm" /> Manipulated</span>
            </div>
          </div>
          <div className="grid grid-cols-32 gap-1" style={{ gridTemplateColumns: "repeat(32, minmax(0,1fr))" }}>
            {timeline.map((t) => (
              <div
                key={t.i}
                className={`h-12 rounded-sm border border-border ${
                  t.risk === "high"
                    ? "bg-destructive/70"
                    : t.risk === "med"
                    ? "bg-primary/60"
                    : "bg-accent/30"
                }`}
                title={`Frame block ${t.i}`}
              />
            ))}
          </div>
          <div className="mt-3 flex justify-between font-mono text-[10px] text-muted-foreground">
            <span>00:00</span><span>00:32</span><span>01:04</span>
          </div>
        </section>

        {/* Explainable panels */}
        <section className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Temporal inconsistency",
              body: "Eye-blink rhythm deviates from natural human cadence between frames #412–#460.",
            },
            {
              title: "GAN fingerprint",
              body: "High-frequency artifacts consistent with StyleGAN-class facial generators.",
            },
            {
              title: "Edge splicing",
              body: "Cheek/jaw boundary shows recompression mismatch indicative of face-swap mask.",
            },
          ].map((c) => (
            <article key={c.title} className="border border-border bg-card/40 rounded-sm p-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-primary">Insight</div>
              <h3 className="font-semibold mt-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{c.body}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}