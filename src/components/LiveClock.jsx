import { useState , useEffect } from "react"

export function LiveClock(){
  const[clock , setClock] = useState(new Date().toLocaleTimeString())

  useEffect(()=>{
    const timerId = setInterval(()=>{
      const date = new Date()
      const time = date.toLocaleTimeString()
      console.log(time)
      setClock(time)
    },1000)

    return ()=> clearInterval(timerId)
  },[])
  

  return(
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      
      <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-[0_0_40px_rgba(56,189,248,0.1)] w-full max-w-md">
        
        <p className="mb-2 text-sm font-semibold tracking-[0.25em] text-sky-400 uppercase">
          Current Time
        </p>

        
        <h1 className="font-mono text-5xl font-extrabold tabular-nums tracking-tight text-white md:text-6xl">
          {clock}
        </h1>
        
      </div>
    </div>
  )
}