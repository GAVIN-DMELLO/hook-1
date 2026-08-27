import { useState } from "react";

export function HabitTracker() {
  const [habit, setHabit] = useState("");
  const [streakhabit, setstreakhabit] = useState([]);

  return (
    <>
      <label>Habit:</label>
      <input type="text" onChange={(e) => setHabit(e.target.value)} />
      <button onClick={() => setstreakhabit([...streakhabit, habit])}>
        Add Habit
      </button>
      <button onClick={() => setstreakhabit([...streakhabit, "done"])}>
        Done
      </button>
      {streakhabit.map((item, index) => (
        <label key={index}>
          <input type="checkbox" />
          {item}
        </label>
      ))}
    </>
  );
}