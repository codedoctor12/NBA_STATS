import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import '@trussworks/react-uswds/lib/uswds.css';

import NbaStats from './components/NbaStats'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NbaStats />
   
    </>
  )
}

export default App
