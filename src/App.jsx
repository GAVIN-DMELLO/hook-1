import {Routes , Route} from 'react-router-dom'
import './App.css'
import { LiveClock } from './components/LiveClock'
import { Pomodoro } from './components/Pomodoro'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LiveClock />}/>  
        <Route path='/pomodoro' element={<Pomodoro />} />
      </Routes>  
    </>
  )
}

export default App
