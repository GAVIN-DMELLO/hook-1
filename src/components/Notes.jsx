import { useState, useEffect } from "react";

export function Notes() {
  const [data, setData] = useState({ content: "" });

  useEffect(() => {
    const saved = localStorage.getItem("notes_data");
    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  function saveProgress(e) {
    const updatedData = { content: e.target.value };
    setData(updatedData);
    localStorage.setItem("notes_data", JSON.stringify(updatedData));
  }

  return (
    <main className="min-h-screen w-screen bg-neutral-950 p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl h-[85vh] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Top bar with subtle status dot */}
        <header className="px-6 py-3 border-b border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
          <span className="tracking-wide uppercase font-semibold text-neutral-300">Scratchpad</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Auto-saving
          </span>
        </header>

        {/* Textarea */}
        <textarea
          className="w-full flex-1 bg-transparent p-6 text-neutral-100 placeholder-neutral-500 text-base font-sans leading-relaxed resize-none outline-none focus:ring-0 selection:bg-neutral-700"
          placeholder="Start typing your notes here..."
          value={data.content}
          onChange={saveProgress}
          autoFocus
        />
      </div>
    </main>
  );
}