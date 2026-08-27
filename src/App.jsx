import {Routes , Route} from 'react-router-dom'
import './App.css'
import { LiveClock } from './components/LiveClock'
import { Pomodoro } from './components/Pomodoro'
import { StopWatch } from './components/StopWatch'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LiveClock />}/>  
        <Route path='/pomodoro' element={<Pomodoro />} />
        <Route path='/stopwatch' element={<StopWatch />} />
      </Routes>  
    </>
  )
}

export default App
