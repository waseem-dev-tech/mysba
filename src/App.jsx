import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
//component
import Navbar from './components/MyNavbar/MyNavbar'
import Footer from './components/Footer/Footer'
//pages
import Mbs from './pages/Mbs'
import Ssbs from './pages/Ssbs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/mbs' element={<Mbs/>}></Route>
        <Route path='/ssbs' element={<Ssbs/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
