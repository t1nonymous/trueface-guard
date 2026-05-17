import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { ForensicNav } from "@/components/forensic-nav";
import forensicFrame from "@/assets/forensic-frame.jpg";
import {
  Upload,
  FolderOpen,
  Activity,
  FileSearch,
  Settings,
  History,
  Layers,
  Cpu,
  Eye,
  CheckCircle2,
  Loader2,
  Film,
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "Analysis Dashboard — UkweliGuard AI" },
      { name: "description", content: "Upload video evidence and run forensic deepfake analysis with real-time pipeline visibility." },
    ],
  }),
});

const sidebar = [
  { icon: Activity, label: "Live Analysis", active: true },
  { icon: FolderOpen, label: "Cases" },
  { icon: History, label: "History" },
  { icon: Layers, label: "Datasets" },
  { icon: FileSearch, label: "Forensic Logs" },
  { icon: Settings, label: "Settings" },
];

const pipeline = [
  { label: "Ingest & Hash", status: "done", detail: "SHA-256 · 00:00.42" },
  { label: "Face Detection", status: "done", detail: "MTCNN · 246 ROIs" },
  { label: "Frame Extraction", status: "done", detail: "30 fps · 1,842 frames" },
  { label: "CNN Inference", status: "active", detail: "XceptionNet · v2.3" },
  { label: "Grad-CAM Mapping", status: "pending", detail: "Pixel attribution" },
  { label: "Verdict Synthesis", status: "pending", detail: "Confidence aggregator" },
];

function Dashboard() {
  const [dragOver, setDragOver] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    setUploaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ForensicNav />
      <div className="grid grid-cols-[220px_1fr] min-h-[calc(100vh-57px)]">
        {/* Sidebar */}
        <aside className="border-r border-border bg-card/30 p-4 space-y-1">
          <div className="px-2 py-3 mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Workspace
          </div>
          {sidebar.map((s) => (
            <button
              key={s.label}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-sm text-sm transition-colors ${
                s.active
                  ? "bg-primary/10 text-primary border-l-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/60"
              }`}
            >
              <s.icon className="size-4" />
              {s.label}
            </button>
          ))}
          <div className="mt-8 px-3 py-4 border border-border rounded-sm bg-background/40">
            <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mb-2">
              Compute
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Cpu className="size-3 text-accent" />
              <span>GPU · 47% load</span>
            </div>
            <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[47%] bg-accent" />
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="p-8 space-y-8 overflow-y-auto">
          <header className="flex items-end justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Case · UG-2026-0184
              </div>
              <h1 className="text-3xl font-bold tracking-tight mt-1">
                Live Forensic Analysis
              </h1>
            </div>
            <div className="flex gap-2 font-mono text-[10px] uppercase tracking-wider">
              <span className="px-2 py-1 bg-card border border-border rounded-sm">Region · TZ</span>
              <span className="px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded-sm">Engine v0.84</span>
            </div>
          </header>

          {/* Upload */}
          <section
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            className={`relative border-2 border-dashed rounded-sm p-12 text-center transition-all ${
              dragOver
                ? "border-primary bg-primary/5"
                : "border-border bg-card/30 hover:bg-card/50"
            }`}
          >
            <div className="mx-auto size-14 rounded-sm bg-primary/10 flex items-center justify-center mb-4">
              <Upload className="size-6 text-primary" />
            </div>
            <p className="text-lg font-semibold">
              {uploaded ? "evidence_clip_184.mp4 · 86.2 MB" : "Drop video evidence to analyze"}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {uploaded ? "Chain-of-custody hash recorded" : "MP4, MOV, MKV · up to 2 GB · processed in-region"}
            </p>
            <button className="mt-5 inline-flex items-center gap-2 bg-foreground text-background px-4 py-1.5 text-sm font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-all">
              <Film className="size-4" /> Browse files
            </button>
          </section>

          {/* Pipeline + preview */}
          <section className="grid lg:grid-cols-[1fr_360px] gap-6">
            <div className="border border-border bg-card/40 rounded-sm">
              <div className="border-b border-border px-4 py-3 flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Pipeline · realtime
                </div>
                <span className="text-[10px] font-mono text-accent">04 / 06 stages</span>
              </div>
              <ol className="divide-y divide-border">
                {pipeline.map((p, i) => (
                  <li key={p.label} className="px-4 py-3 flex items-center gap-4">
                    <span className="font-mono text-[10px] text-muted-foreground w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{p.label}</div>
                      <div className="text-[11px] text-muted-foreground font-mono">{p.detail}</div>
                    </div>
                    {p.status === "done" && <CheckCircle2 className="size-4 text-accent" />}
                    {p.status === "active" && (
                      <Loader2 className="size-4 text-primary animate-spin" />
                    )}
                    {p.status === "pending" && (
                      <span className="size-2 rounded-full bg-muted-foreground/40" />
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="border border-border bg-card/40 rounded-sm overflow-hidden">
              <div className="border-b border-border px-4 py-3 flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Extracted Frame · #00428
                </div>
                <Eye className="size-3.5 text-muted-foreground" />
              </div>
              <div className="relative">
                <img src={forensicFrame} alt="Extracted frame" className="w-full aspect-video object-cover" />
                <div className="absolute inset-x-0 top-0 h-px bg-primary scan-line" />
                <div className="absolute top-3 left-3 font-mono text-[9px] text-primary bg-background/70 px-1.5 py-0.5 rounded-sm">
                  ROI · 1
                </div>
              </div>
              <div className="p-3 grid grid-cols-3 gap-2">
                {[428, 612, 894].map((n) => (
                  <div key={n} className="aspect-video bg-muted/40 border border-border rounded-sm relative overflow-hidden">
                    <img src={forensicFrame} alt="" className="w-full h-full object-cover opacity-70" />
                    <span className="absolute bottom-1 left-1 font-mono text-[8px] bg-background/70 px-1">{`#${n}`}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}