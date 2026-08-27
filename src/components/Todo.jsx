
import { useState } from "react";

export function Todo() {
  const[value , setValue] = useState('')
  const[task , setTask] = useState([])


  function handleTask(taskIndex){
    const updatedTask = task.map((task , index)=>{
      if(index === taskIndex){
        return {...task , isCompleted : !task.isCompleted}
      }
      return task
    })
    setTask(updatedTask)
  }


  const total = task.length;
  const completed = task.filter((t) => t.isCompleted).length;
  const remaining = total - completed;


  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-950 p-6 text-slate-100 antialiased">
  <div className="w-full max-w-lg rounded-3xl border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl">
    
    {/* Input Header Section */}
    <div className="mb-6 space-y-3">
      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400">
        Task:
      </label>
      <div className="flex gap-3">
        <input 
          type="text" 
          onChange={(e) => setValue(e.target.value)} 
          className="flex-1 rounded-xl border border-slate-700/80 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 shadow-inner outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
        />
        <button 
          onClick={() => {setTask([...task, { value: value, isCompleted: false }]); setValue('')}} 
          className="rounded-xl bg-linear-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:brightness-110 hover:shadow-indigo-600/50 active:scale-95"
        >
          Add Task
        </button>
      </div>
    </div>

    {/* Task List */}
    <div className="mb-6 max-h-80 space-y-2.5 overflow-y-auto pr-1">
      {task.map((tasks, index) => (
        <div 
          key={index} 
          className="group flex items-center justify-between rounded-xl border border-slate-800/70 bg-slate-950/40 p-3.5 transition-all hover:border-slate-700 hover:bg-slate-800/40"
        >
          <label className="flex w-full cursor-pointer items-center gap-3.5">
            <input 
              type="checkbox" 
              checked={tasks.isCompleted} 
              onChange={() => handleTask(index)} 
              value={value}
              className="h-5 w-5 rounded-md border-slate-700 bg-slate-900 accent-indigo-500 transition-transform active:scale-90"
            />
            <span className={`text-sm font-medium tracking-wide transition-all select-none ${tasks.isCompleted ? "line-through text-slate-500 decoration-slate-600" : "text-slate-200"}`}>
              {tasks.value}
            </span>
          </label>
        </div>
      ))}
    </div>

    {/* Summary Metric Counters */}
    <div className="grid grid-cols-3 gap-3 border-t border-slate-800/80 pt-6">
      <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800/60 bg-slate-950/40 p-3 text-center">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Total: {total}</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-950/50 bg-emerald-950/20 p-3 text-center">
        <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">Completed: {completed}</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-amber-950/50 bg-amber-950/20 p-3 text-center">
        <p className="text-xs font-medium uppercase tracking-wider text-amber-400">Remaining: {remaining}</p>
      </div>
    </div>

  </div>
</div>
  );
}