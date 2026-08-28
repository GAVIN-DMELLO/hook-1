import { useState } from "react";

const FRUITS = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];

export function Search() {
  const [query, setQuery] = useState("");
  const [filteredFruits, setFilteredFruits] = useState([]);

  function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredFruits([]);
      return;
    }

    const matches = FRUITS.filter((fruit) =>
      fruit.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredFruits(matches);
  }

  return (
    <main className="min-h-screen w-full bg-neutral-950 text-neutral-100 flex items-start justify-center pt-24 px-4">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl p-5 shadow-2xl space-y-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search fruits..."
            className="w-full bg-neutral-950/70 border border-neutral-800 rounded-xl px-4 py-3 text-sm placeholder-neutral-500 text-neutral-200 outline-none focus:border-neutral-600 transition-colors"
          />
        </div>

        {/* Results List */}
        {filteredFruits.length > 0 && (
          <ul className="divide-y divide-neutral-800/60 rounded-xl border border-neutral-800/80 bg-neutral-950/40 overflow-hidden">
            {filteredFruits.map((fruit, index) => (
              <li
                key={index}
                className="px-4 py-2.5 text-sm text-neutral-300 hover:bg-neutral-800/50 transition-colors flex items-center justify-between"
              >
                <span>{fruit}</span>
                <span className="text-xs text-neutral-600">Match</span>
              </li>
            ))}
          </ul>
        )}

        {/* Empty state when typing but no match found */}
        {query.trim() !== "" && filteredFruits.length === 0 && (
          <p className="text-xs text-neutral-500 text-center py-4">
            No fruits found matching &quot;{query}&quot;
          </p>
        )}
      </div>
    </main>
  );
}