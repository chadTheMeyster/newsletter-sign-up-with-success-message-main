import { Routes, Route} from 'react-router';
import { useState } from 'react';
import './App.css';
import { Subscribe } from './Subscribe';
import { Subscribed } from './Subscribed';

function App() {
  const [ sharedEmail, setSharedEmail ] = useState();

  return (
    <Routes>
      <Route index element={<Subscribe setSharedEmail={setSharedEmail}/>}/>
      <Route path='Subscribed' element={<Subscribed sharedEmail={sharedEmail}/>}/>
    </Routes>
    
  )
}

export default App
