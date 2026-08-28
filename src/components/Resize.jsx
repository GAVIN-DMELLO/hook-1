import { useState, useEffect } from "react";

export default function Resize() {
  const [screenSize, setScreenSize] = useState("");

  const BREAKPOINTS = [
    { name: "Mobile", min: 0, max: 639 },
    { name: "Tablet", min: 640, max: 767 },
    { name: "Laptop", min: 768, max: 1023 },
    { name: "Desktop", min: 1024, max: 1279 },
    { name: "Large Desktop", min: 1280, max: Infinity },
  ];

  const handleResize = () => {
    const matched = BREAKPOINTS.find(
      (item) => window.innerWidth >= item.min && window.innerWidth <= item.max
    );

    if (matched) {
      setScreenSize(matched.name);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-6 selection:bg-emerald-500/30">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl shadow-2xl shadow-black/60 flex flex-col items-center text-center space-y-4">
        
        {/* Top Status Indicator */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Live Viewport Detector
        </div>

        {/* Header */}
        <h1 className="text-xl font-semibold tracking-tight text-zinc-300">
          Screen Size Watcher
        </h1>

        {/* Dynamic Display */}
        <div className="w-full py-6 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            {screenSize || "Detecting..."}
          </h2>
        </div>

        <p className="text-xs text-zinc-500">
          Resize your browser window to test the breakpoints in real time.
        </p>
      </div>
    </div>
  );
}