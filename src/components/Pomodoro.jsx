import { useEffect, useState, } from "react"

export function Pomodoro(){
  const[second , setSecond] = useState(10)
  const[minute , setMinute] = useState(0)
  const[hour , setHour] = useState(0)
  const[isRunning , setIsRunning] = useState(false)

  
    useEffect(()=>{
    const timer = setTimeout(()=>{

      if(isRunning === false){
        return;
      }

      if(hour===0 && minute===0 && second===0){
        setIsRunning(false)
        return
      }
      
      if(second === 0){
        setSecond(59)
        if(minute === 0){
          setHour(hour-1)
          setMinute(59)
        }
        else{
          setMinute(minute - 1)
        }
      }else{
        setSecond(second - 1)
      }

    },1000)

    return ()=> clearTimeout(timer)
    
  },[second , minute , hour , isRunning])
  

  

  

  return(
    <div className="max-w-sm mx-auto mt-12 p-6 bg-white border border-gray-200 rounded-lg text-center shadow-sm">
      <p className="text-4xl font-mono font-bold text-gray-800 mb-6">{hour}:{minute}:{second}</p>
      
      <input type="number" id='hour' value={hour} onChange={(e)=>setHour(e.target.value)} className="w-16 px-2 py-1 mx-1 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" />
      
      <input type="number" id='minute' value={minute} onChange={(e)=>setMinute(e.target.value)} className="w-16 px-2 py-1 mx-1 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" />
      
      <input type="number" id='second' value={second} onChange={(e)=>setSecond(e.target.value)} className="w-16 px-2 py-1 mx-1 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" />
      
      <button onClick={()=>setIsRunning(true)} className="block w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors">
        Start
      </button>
    </div>
  )
}