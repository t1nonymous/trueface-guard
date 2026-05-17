import { createFileRoute } from "@tanstack/react-router";
import forensicFrame from "@/assets/forensic-frame.jpg";
import { Upload, ShieldAlert, Activity, FileSearch, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "UkweliGuard AI — Forensic Video Authentication" },
      { name: "description", content: "Detect AI deepfakes and traditional video manipulation with explainable Grad-CAM heatmaps. Optimized for Tanzanian and East African faces." },
      { property: "og:title", content: "UkweliGuard AI — Forensic Video Authentication" },
      { property: "og:description", content: "Truth at the pixel level. Explainable deepfake and manipulation detection." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-primary rounded-sm" />
            <span className="font-medium tracking-tight text-lg">
              UKWELI<span className="text-muted-foreground">GUARD</span>
            </span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#forensics" className="hover:text-foreground transition-colors">Forensics</a>
            <a href="#dataset" className="hover:text-foreground transition-colors">Dataset</a>
            <a href="#methodology" className="hover:text-foreground transition-colors">Methodology</a>
            <a href="#docs" className="hover:text-foreground transition-colors">Docs</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded uppercase tracking-wider">
            Node: Dar Es Salaam
          </span>
          <button className="bg-foreground text-background px-4 py-1.5 text-sm font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-all">
            Launch Analysis
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-border bg-card/40">
                <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Forensic Engine · v0.84-Beta
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-balance leading-[0.9]">
                TRUTH AT THE <br />
                <span className="text-primary">PIXEL LEVEL.</span>
              </h1>
              <p className="text-muted-foreground text-xl max-w-[50ch] text-pretty leading-relaxed">
                Advanced video authentication for East African digital ecosystems.
                Detect deepfakes and spatial manipulation with explainable heatmaps.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity">
                  <Upload className="size-4" /> Upload Video for Analysis
                </button>
                <button className="inline-flex items-center gap-2 border border-border bg-card/40 px-5 py-2.5 text-sm font-medium rounded-sm hover:bg-card transition-colors">
                  View Sample Report <ArrowRight className="size-4" />
                </button>
              </div>
            </div>

            {/* Frame preview */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card/40 border border-border p-1 rounded-lg overflow-hidden">
                <div className="relative aspect-video bg-black/40 rounded-sm overflow-hidden">
                  <img
                    src={forensicFrame}
                    alt="Forensic analysis frame showing manipulation regions"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover grayscale opacity-60"
                  />
                  {/* Scan line */}
                  <div className="absolute inset-x-0 top-0 scan-line h-1 bg-primary/40 shadow-[0_0_15px_rgba(255,77,0,0.5)] z-10 pointer-events-none" />
                  {/* Heatmap blobs */}
                  <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 size-40 rounded-full bg-primary/40 blur-2xl heatmap-pulse" />
                  <div className="absolute top-[58%] left-[55%] size-24 rounded-full bg-orange-500/30 blur-xl heatmap-pulse" />
                  <div className="absolute top-[35%] left-[42%] size-16 rounded-full bg-yellow-400/30 blur-xl heatmap-pulse" />
                  {/* HUD */}
                  <div className="absolute bottom-4 left-4 font-mono text-[11px] space-y-1 bg-black/60 p-3 backdrop-blur-md border border-white/10">
                    <div className="flex justify-between gap-8"><span className="text-muted-foreground">FRAME_INDEX:</span> <span className="text-primary">0842 / 1200</span></div>
                    <div className="flex justify-between gap-8"><span className="text-muted-foreground">SPATIAL_SYNC:</span> <span className="text-accent">LOCKED</span></div>
                    <div className="flex justify-between gap-8"><span className="text-muted-foreground">MODEL_V:</span> <span>FAGE_v2.4</span></div>
                  </div>
                  {/* Corner brackets */}
                  <div className="absolute top-3 right-3 size-6 border-t-2 border-r-2 border-primary/60" />
                  <div className="absolute top-3 left-3 size-6 border-t-2 border-l-2 border-primary/60" />
                </div>
              </div>
            </div>
          </div>

          {/* Side panel */}
          <aside className="space-y-6">
            <div className="bg-card/40 border border-border p-6 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Classification</h3>
                <span className="text-[10px] font-mono bg-destructive/20 text-destructive px-2 py-0.5 rounded">
                  MANIPULATED
                </span>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Confidence Score</span>
                    <span className="text-primary font-mono">98.4%</span>
                  </div>
                  <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "98.4%" }} />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2">
                  <Metric label="Deepfake" value="0.94" tone="primary" />
                  <Metric label="Edit" value="0.04" />
                  <Metric label="Auth" value="0.02" />
                </div>

                <div className="pt-4 border-t border-border space-y-3">
                  <h4 className="font-mono text-[10px] uppercase text-muted-foreground">Evidence Log</h4>
                  <Evidence
                    title="FaceSwap detected"
                    body="Inconsistent temporal blending on mandibular edge."
                    tone="primary"
                  />
                  <Evidence
                    title="Spatial Anomaly"
                    body="Grad-CAM highlights noise residuals in ocular region."
                    tone="primary"
                  />
                  <Evidence
                    title="Traditional Edit"
                    body="Frame 412 shows content-aware fill artifacts."
                    tone="accent"
                  />
                </div>

                <button className="w-full mt-2 py-2.5 border border-border rounded-sm font-mono text-[11px] text-muted-foreground hover:bg-card hover:text-foreground uppercase tracking-widest transition-colors">
                  Download Forensic Report
                </button>
              </div>
            </div>

            {/* Frame strip */}
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] uppercase text-muted-foreground px-1">
                Temporal Analysis Strip
              </h4>
              <div className="grid grid-cols-5 gap-1.5">
                {[1, 1, 0.3, 0.15, 0.15].map((c, i) => (
                  <div key={i} className="aspect-square bg-card/40 border border-border relative overflow-hidden">
                    <img
                      src={forensicFrame}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover grayscale opacity-40"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 border-b-2"
                      style={{ borderColor: `oklch(0.70 0.22 35 / ${c})` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-mono text-[9px] text-muted-foreground">
                <span>00:01s</span>
                <span>00:04s</span>
              </div>
            </div>
          </aside>
        </section>

        {/* Credibility */}
        <section id="forensics" className="mt-24 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-12">
          <Capability
            icon={<ShieldAlert className="size-4 text-primary" />}
            kicker="Local Bias Correction"
            body={
              <>
                Trained on the <span className="text-foreground underline decoration-primary/30">FAGE_v2</span> dataset, optimized specifically for Tanzanian facial features to eliminate ethnic bias in AI detection.
              </>
            }
          />
          <Capability
            icon={<FileSearch className="size-4 text-primary" />}
            kicker="Forensic Explainability"
            body="No black-box results. Grad-CAM heatmaps visualize spatial contradictions, providing court-admissible visual evidence of tampering."
          />
          <Capability
            icon={<Activity className="size-4 text-primary" />}
            kicker="Hybrid Detection"
            body="Identifies both AI-generated deepfakes and traditional forensic anomalies like metadata scrubbing, double-compression, and frame-rate splicing."
          />
        </section>

        {/* Methodology */}
        <section id="methodology" className="mt-24 pt-12 border-t border-border">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">/ Methodology</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                Five-phase forensic pipeline.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Each ingested video flows through a deterministic chain of preprocessing,
                inference and explanation stages — auditable end to end.
              </p>
            </div>
            <ol className="space-y-px border border-border rounded-lg overflow-hidden">
              {[
                ["01", "Dataset & Ingest", "FaceForensics++ (C23), DFDC, FAGE_v2 — normalized at 224px frame extraction."],
                ["02", "Preprocessing", "Pixel normalization, face alignment, temporal windowing for frame consistency."],
                ["03", "Model Inference", "CNN backbone classifies each frame across deepfake / traditional / authentic."],
                ["04", "Explainability", "Grad-CAM weights are projected onto the source frame as a forensic heatmap."],
                ["05", "Evaluation", "Accuracy, precision, recall, F1-score and frame-level consistency reported."],
              ].map(([n, t, b]) => (
                <li key={n} className="grid grid-cols-[80px_200px_1fr] gap-6 p-5 bg-card/30 hover:bg-card/60 transition-colors">
                  <span className="font-mono text-primary text-sm">{n}</span>
                  <span className="font-semibold text-sm">{t}</span>
                  <span className="text-sm text-muted-foreground">{b}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Datasets */}
        <section id="dataset" className="mt-24 pt-12 border-t border-border">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">/ Datasets</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Training corpus.</h2>
            </div>
            <span className="hidden md:inline font-mono text-[10px] text-muted-foreground">3 SOURCES · 22.36 GB</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <DatasetCard
              code="DS_01"
              name="FaceForensics++"
              size="17.92 GB"
              count="7,010 files"
              note="6,000 deepfake + 1,000 real videos across 6 manipulation families."
            />
            <DatasetCard
              code="DS_02"
              name="DFDC"
              size="4.44 GB"
              count="Deepfake Detection Challenge"
              note="Facial and voice manipulation samples for cross-domain robustness."
            />
            <DatasetCard
              code="DS_03"
              name="FAGE_v2"
              size="Local"
              count="Indigenous African faces"
              note="Age-invariant face recognition dataset — addresses Tanzania-specific deepfake risk."
              highlight
            />
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 pt-12 border-t border-border">
          <div className="relative overflow-hidden rounded-lg border border-border bg-card/40 p-10 md:p-14">
            <div className="absolute -top-20 -right-20 size-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight max-w-[24ch]">
                  Before you share it, verify it.
                </h3>
                <p className="mt-3 text-muted-foreground max-w-[55ch]">
                  Built for journalists, election monitors, and digital forensics teams operating in high-stakes information environments.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity">
                <Upload className="size-4" /> Begin Analysis
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-24 border-t border-border px-6 py-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono text-[10px] text-muted-foreground">
          © 2026 UKWELIGUARD LABS · DAR ES SALAAM · v0.84-BETA
        </div>
        <div className="flex gap-8 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Institutional Access</a>
          <a href="#" className="hover:text-primary transition-colors">Research Ethics</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

function Metric({ label, value, tone }: { label: string; value: string; tone?: "primary" }) {
  return (
    <div className="border border-border rounded-sm p-2">
      <div className="font-mono text-[9px] uppercase text-muted-foreground tracking-wider">{label}</div>
      <div className={`font-mono text-sm mt-0.5 ${tone === "primary" ? "text-primary" : "text-foreground"}`}>{value}</div>
    </div>
  );
}

function Evidence({ title, body, tone }: { title: string; body: string; tone: "primary" | "accent" }) {
  return (
    <div className="flex gap-3 text-xs">
      <div className={`size-2 mt-1 shrink-0 ${tone === "primary" ? "bg-primary" : "bg-accent"}`} />
      <p className="text-muted-foreground leading-relaxed">
        <span className="text-foreground font-semibold">{title}:</span> {body}
      </p>
    </div>
  );
}

function Capability({ icon, kicker, body }: { icon: React.ReactNode; kicker: string; body: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        {icon}
        <h5 className="font-mono text-[10px] uppercase text-primary font-bold tracking-widest">{kicker}</h5>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function DatasetCard({
  code, name, size, count, note, highlight,
}: { code: string; name: string; size: string; count: string; note: string; highlight?: boolean }) {
  return (
    <div className={`relative border border-border rounded-lg p-5 bg-card/30 hover:bg-card/60 transition-colors ${highlight ? "ring-1 ring-primary/40" : ""}`}>
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-[10px] text-muted-foreground">{code}</span>
        {highlight && (
          <span className="font-mono text-[9px] text-primary bg-primary/10 px-1.5 py-0.5 rounded uppercase tracking-wider">
            Local
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="font-mono text-[10px] text-muted-foreground mt-1">{count} · {size}</p>
      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{note}</p>
    </div>
  );
}

