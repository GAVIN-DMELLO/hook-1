import {Routes , Route} from 'react-router-dom'
import './App.css'
import { LiveClock } from './components/LiveClock'
import { Pomodoro } from './components/Pomodoro'
import { StopWatch } from './components/StopWatch'
import { Todo } from './components/Todo'
import { HabitTracker } from './components/HabitTracker'
import { Joker } from './components/Joker'
import Network from './components/Network'
import Resize from './components/Resize'
import { Notes } from './components/Notes'
import { Search } from './components/Search'
import { IdleDetector } from './components/IdleDetector'
import { CurrencyConverter } from './components/CurrencyConverter'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LiveClock />}/>  
        <Route path='/pomodoro' element={<Pomodoro />} />
        <Route path='/stopwatch' element={<StopWatch />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/habittracker' element={<HabitTracker />} />
        <Route path='/joker' element={<Joker />} />
        <Route path='/network' element={<Network />} />
        <Route path='/resize' element={<Resize />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/search' element={<Search />} />
        <Route path='/idle' element={<IdleDetector />} />
        <Route path='/currency-converter' element={<CurrencyConverter />} />
      </Routes>  
    </>
  )
}

export default App
