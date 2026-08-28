import { useState } from "react";

export function CurrencyConverter() {
  const [inr, setInr] = useState("");
  const [chf, setChf] = useState("");
  const [activeField, setActiveField] = useState(null);

  function inrToChf() {
    const value = parseFloat(inr);
    if (!isNaN(value)) {
      setChf((value * 0.0105).toFixed(2));
    }
  }

  function chfToInr() {
    const value = parseFloat(chf);
    if (!isNaN(value)) {
      setInr((value * 95).toFixed(2));
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#07090e] p-6 font-sans antialiased selection:bg-emerald-500/20">
      {/* Background Decorative Ambient Glow */}
      <div className="relative w-full max-w-md">
        <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Main Card */}
        <div className="relative flex flex-col gap-6 rounded-3xl border border-zinc-800/80 bg-[#0c1017]/90 p-8 shadow-[0_0_50px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl ring-1 ring-white/5">
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/60 pb-5">
            <div>
              <p className="text-xs font-mono font-medium uppercase tracking-widest text-zinc-500">
                FX Exchange
              </p>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-100">
                Currency Converter
              </h2>
            </div>
            <span className="rounded-full border border-emerald-500/20 bg-emerald-950/40 px-3 py-1 font-mono text-xs font-medium text-emerald-400">
              1 CHF ≈ 95.00 INR
            </span>
          </div>

          {/* Form Fields Container */}
          <div className="flex flex-col gap-5">
            {/* INR Input Group */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono font-medium tracking-wide text-zinc-400">
                Indian Rupee (INR)
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 font-mono text-sm font-medium text-zinc-500">
                  ₹
                </span>
                <input
                  type="number"
                  placeholder="0.00"
                  value={inr}
                  onChange={(e) => {
                    setInr(e.target.value);
                    setActiveField("INR");
                  }}
                  className="w-full rounded-xl border border-zinc-800 bg-[#07090e] py-3.5 pl-9 pr-14 font-mono text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-emerald-500/50 focus:bg-zinc-950/80 focus:shadow-[0_0_20px_-3px_rgba(16,185,129,0.15)] focus:ring-1 focus:ring-emerald-500/30"
                />
                <span className="absolute right-4 rounded border border-zinc-800 bg-zinc-900/60 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-zinc-500">
                  INR
                </span>
              </div>
              {activeField !== "CHF" && (
                <button
                  onClick={inrToChf}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 py-2.5 text-xs font-medium text-emerald-400 border border-emerald-500/20 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-500/40 active:scale-[0.99]"
                >
                  Convert INR to CHF →
                </button>
              )}
            </div>

            {/* CHF Input Group */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono font-medium tracking-wide text-zinc-400">
                Swiss Franc (CHF)
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 font-mono text-sm font-medium text-zinc-500">
                  CHF
                </span>
                <input
                  type="number"
                  placeholder="0.00"
                  value={chf}
                  onChange={(e) => {
                    setChf(e.target.value);
                    setActiveField("CHF");
                  }}
                  className="w-full rounded-xl border border-zinc-800 bg-[#07090e] py-3.5 pl-14 pr-14 font-mono text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-emerald-500/50 focus:bg-zinc-950/80 focus:shadow-[0_0_20px_-3px_rgba(16,185,129,0.15)] focus:ring-1 focus:ring-emerald-500/30"
                />
                <span className="absolute right-4 rounded border border-zinc-800 bg-zinc-900/60 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-zinc-500">
                  CHF
                </span>
              </div>
              {activeField !== "INR" && (
                <button
                  onClick={chfToInr}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 py-2.5 text-xs font-medium text-emerald-400 border border-emerald-500/20 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-500/40 active:scale-[0.99]"
                >
                  Convert CHF to INR →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}