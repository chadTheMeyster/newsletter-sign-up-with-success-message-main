import { Routes, Route} from 'react-router';
import './App.css';
import { Subscribe } from './Subscribe';
import { Subscribed } from './Subscribed';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Subscribe/>}/>
      <Route path='Subscribed' element={<Subscribed/>}/>
    </Routes>
    
  )
}

export default App
