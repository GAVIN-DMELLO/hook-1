import {Routes , Route} from 'react-router-dom'
import './App.css'
import { LiveClock } from './components/LiveClock'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LiveClock />}/>  
      </Routes>  
    </>
  )
}

export default App
