import { useState , useEffect } from "react";

export function StopWatch() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const[isRunning , setIsRunning] = useState(false)
  const[lap , setLap] = useState([])


  useEffect(() => {

    if(isRunning){
      const timeoutId = setTimeout(() => {
      if(second===59){
        if(minute===59){
          setSecond(0)
          setMinute(0)
          setHour(hour+1)
        }
        else{
          setSecond(0)
          setMinute(minute + 1)
        }
      }else{
        setSecond(second + 1);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
    }
    
  }, [second , isRunning ]);

  const lapVar = `${hour}:${minute}:${second}`

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 gap-4 py-10">
      <p className="text-7xl font-mono font-bold text-white mb-6 tabular-nums">
        {hour}:{minute}:{second}
      </p>
      <button className="w-32 px-4 py-3 text-lg font-bold text-white bg-green-500 rounded hover:bg-green-600 active:bg-green-700" onClick={()=>setIsRunning(true)} >Start</button>
      <button className="w-32 px-4 py-3 text-lg font-bold text-white bg-red-500 rounded hover:bg-red-600 active:bg-red-700" onClick={()=>setIsRunning(false)} >Stop</button>
      <button className="w-32 px-4 py-3 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600 active:bg-blue-700 mb-6" onClick={()=>setLap([...lap , lapVar ])}>Lap</button>
      {lap.map((lapTime)=><p className="text-xl font-mono text-slate-300 bg-slate-800 px-6 py-2 rounded-md min-w-50 text-center">{lapTime}</p>)}
    </div>
  );
}