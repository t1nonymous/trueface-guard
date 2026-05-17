import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ForensicNav } from "@/components/forensic-nav";
import forensicFrame from "@/assets/forensic-frame.jpg";
import { Brain, Sparkles, Eye, GitCompare } from "lucide-react";

export const Route = createFileRoute("/explainability")({
  component: Explainability,
  head: () => ({
    meta: [
      { title: "Explainability — UkweliGuard AI" },
      { name: "description", content: "Compare original vs manipulated frame and read AI-generated forensic insights." },
    ],
  }),
});

function Explainability() {
  const [pos, setPos] = useState(50);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ForensicNav />
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <header>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Frame #00428 · Explainable AI
          </div>
          <h1 className="text-3xl font-bold tracking-tight mt-1">Side-by-side Inspection</h1>
        </header>

        {/* Side-by-side */}
        <section className="grid md:grid-cols-2 gap-4">
          {[
            { tag: "Original · Reference", caption: "Baseline frame from claimed source." },
            { tag: "Suspect · Manipulated", caption: "Frame extracted from circulated clip." },
          ].map((s, idx) => (
            <div key={s.tag} className="border border-border bg-card/40 rounded-sm overflow-hidden">
              <div className="border-b border-border px-4 py-3 flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.tag}</div>
                <Eye className="size-3.5 text-muted-foreground" />
              </div>
              <div className="relative aspect-video">
                <img src={forensicFrame} alt="" className={`w-full h-full object-cover ${idx === 1 ? "saturate-150" : ""}`} />
                {idx === 1 && <div className="absolute top-[30%] left-[36%] size-28 rounded-full bg-destructive/40 blur-2xl heatmap-pulse" />}
              </div>
              <p className="px-4 py-3 text-xs text-muted-foreground">{s.caption}</p>
            </div>
          ))}
        </section>

        {/* Heatmap slider */}
        <section className="border border-border bg-card/40 rounded-sm overflow-hidden">
          <div className="border-b border-border px-4 py-3 flex items-center justify-between">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
              <GitCompare className="size-3.5" /> Heatmap comparison slider
            </div>
            <span className="font-mono text-[10px] text-primary">{pos}% overlay</span>
          </div>
          <div className="relative aspect-[21/9] overflow-hidden">
            <img src={forensicFrame} alt="Original" className="absolute inset-0 w-full h-full object-cover" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <img src={forensicFrame} alt="Heatmap" className="absolute inset-0 w-full h-full object-cover saturate-150" />
              <div className="absolute top-[30%] left-[36%] size-40 rounded-full bg-destructive/50 blur-3xl heatmap-pulse" />
              <div className="absolute top-[42%] left-[48%] size-24 rounded-full bg-primary/60 blur-2xl heatmap-pulse" />
            </div>
            <div
              className="absolute inset-y-0 w-px bg-primary"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold">
                ⇆
              </div>
            </div>
          </div>
          <div className="p-4">
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              className="w-full accent-primary"
              aria-label="Heatmap overlay position"
            />
          </div>
        </section>

        {/* AI explanation cards */}
        <section className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: Brain,
              title: "Why the model flagged this region",
              body: "The CNN's attention concentrates on the inner cheek and jawline — areas where face-swap masks typically reveal blending seams. Activation strength exceeds the 0.81 deepfake threshold.",
            },
            {
              icon: Sparkles,
              title: "Plain-language summary",
              body: "The right side of the face does not move consistently with the left. Skin texture around the jaw appears smoother than the rest of the frame — a common synthetic-face artifact.",
            },
          ].map((c) => (
            <article key={c.title} className="border border-border bg-card/40 p-5 rounded-sm">
              <div className="flex items-center gap-2 text-primary">
                <c.icon className="size-4" />
                <span className="font-mono text-[10px] uppercase tracking-wider">AI Insight</span>
              </div>
              <h3 className="font-semibold text-lg mt-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.body}</p>
            </article>
          ))}
        </section>

        {/* Forensic summary */}
        <section className="border border-border bg-card/40 rounded-sm p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Forensic insight summary
          </div>
          <h2 className="text-xl font-semibold mt-1">Manipulation type: facial reenactment with GAN-class synthesis</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>· 6 of 32 temporal segments exceed the deepfake threshold.</li>
            <li>· 2 segments contain conventional edits (cuts and frame insertions).</li>
            <li>· Audio-visual lip sync drift averages 78ms over the suspect range.</li>
            <li>· FAGE_v2 bias-corrected confidence: 98.4% manipulated.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}