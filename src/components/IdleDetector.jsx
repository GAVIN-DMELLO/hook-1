import { useState, useEffect } from "react";

export function IdleDetector() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer;
    const events = ["mousemove", "keydown", "click", "scroll"];

    function handleActivity() {
      clearTimeout(timer);
      setIsActive(true);

      timer = setTimeout(() => {
        setIsActive(false);
      }, 5000);
    }

    handleActivity();

    events.forEach((event) => {
      window.addEventListener(event, handleActivity);
    });

    return () => {
      clearTimeout(timer);
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, []);

  return (
    // Changed min-h-[260px] to min-h-screen and added w-full for full screen dark mode
    <div className="flex min-h-screen w-full items-center justify-center bg-[#07090e] p-6 font-sans antialiased selection:bg-cyan-500/20">
      {/* Outer Shell Card */}
      <div
        className={`group relative flex items-center gap-5 overflow-hidden rounded-2xl border px-6 py-4.5 transition-all duration-700 ease-out ${
          isActive
            ? "border-cyan-500/30 bg-[#0c121e]/80 shadow-[0_0_50px_-12px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400/20"
            : "border-zinc-800/80 bg-[#0f1117]/80 shadow-[0_0_40px_-15px_rgba(0,0,0,0.7)] ring-1 ring-white/5"
        }`}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          className={`pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full blur-2xl transition-opacity duration-700 ${
            isActive ? "bg-cyan-500/15 opacity-100" : "bg-zinc-600/5 opacity-0"
          }`}
        />

        {/* Live Indicator Pillar */}
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-zinc-950/60 shadow-inner">
          <span
            className={`absolute h-4 w-4 rounded-full transition-all duration-500 ${
              isActive
                ? "animate-ping bg-cyan-400/30 opacity-80"
                : "opacity-0"
            }`}
          />
          <span
            className={`relative h-2.5 w-2.5 rounded-full transition-all duration-500 ${
              isActive
                ? "bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
                : "bg-zinc-600 shadow-none"
            }`}
          />
        </div>

        {/* Status Typography */}
        <div className="flex flex-col pr-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-zinc-500">
              Detector
            </span>
            <span className="inline-block h-1 w-1 rounded-full bg-zinc-700" />
            <span
              className={`text-[11px] font-mono tracking-wider transition-colors duration-500 ${
                isActive ? "text-cyan-400/90" : "text-zinc-500"
              }`}
            >
              {isActive ? "5s TTL" : "Expired"}
            </span>
          </div>

          <span
            className={`text-base font-semibold tracking-tight transition-colors duration-500 ${
              isActive ? "text-zinc-100" : "text-zinc-400"
            }`}
          >
            {isActive ? "User Active" : "Standby (Idle)"}
          </span>
        </div>

        {/* Dynamic Status Capsule */}
        <div
          className={`ml-auto flex items-center gap-1.5 rounded-lg border px-3 py-1 text-xs font-medium tracking-wide transition-all duration-500 ${
            isActive
              ? "border-cyan-500/20 bg-cyan-950/40 text-cyan-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
              : "border-zinc-800 bg-zinc-900/60 text-zinc-500"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
              isActive ? "bg-cyan-400" : "bg-zinc-600"
            }`}
          />
          {isActive ? "Online" : "Away"}
        </div>
      </div>
    </div>
  );
}