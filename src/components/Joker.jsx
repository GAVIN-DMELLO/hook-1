import { useState } from "react";

export function Joker() {
  const [jokes, setJokes] = useState("");

  async function getjoke() {
    try {
      const data = await fetch("https://official-joke-api.appspot.com/random_joke");
      const joke = await data.json();
      setJokes(`${joke.setup} — ${joke.punchline}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-4 text-zinc-100">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-xl backdrop-blur-sm text-center flex flex-col gap-6">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
          Random Joke
        </h1>

        <div className="min-h-20 flex items-center justify-center rounded-xl bg-zinc-950/50 p-4 border border-zinc-800/80">
          <p className="text-zinc-300 text-base leading-relaxed">
            {jokes || "Click below to get a joke"}
          </p>
        </div>

        <button
          onClick={getjoke}
          className="w-full rounded-xl bg-zinc-100 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200 active:scale-[0.98]"
        >
          Get Joke
        </button>
      </div>
    </div>
  );
}