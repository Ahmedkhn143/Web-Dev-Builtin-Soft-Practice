import { useState } from 'react'
import Footer from './pages/Footer'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import 

function App() {
  const  [count, setCount] = useState(10);

  const handleClick = () => {
    setCount(12);
  }



  return (
    <div>
     <Navbar/>
     <h1>{count}</h1>
     <Footer/>

    </div>
  )
}

export default App
