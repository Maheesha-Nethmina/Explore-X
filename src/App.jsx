import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Destination from './Pages/Destination'
import Booking from './Pages/Booking'

//by nema

function App() {
 
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/gallery" element={<Gallery/>}></Route>
      <Route path="/destinations" element={<Destination/>}></Route>
      <Route path="/booking" element={<Booking/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
    
  )
}

export default App
