import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/Navbar'
import Hero from './Components/Hero'
import Service from './Components/services'
import PointSec from './Components/PointSec'
import SliderSec from './Components/Slider'
import Percentage from './Components/Percentage'
import CalltoAction from './Components/CalltoAction'
import FooterSec from './Components/FooterSec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <main> 
  <NavBar/>
 <div className=' overflow-x-hidden'> 

   
   <Hero/>
   <Service/>
   <PointSec/>
   <SliderSec/>
   <Percentage/>
   <CalltoAction/>
   
 </div>
 <FooterSec/>
   
  </main>
    </>
  )
}

export default App
