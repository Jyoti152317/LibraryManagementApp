import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={BookList} />
      </Routes>
        
    </>
  )
}
