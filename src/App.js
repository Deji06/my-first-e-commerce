
import React, { useState } from 'react'
import Navbar from './navbar/navbar';
import Homepage from './homepage/homepage';

const App = () => {
  const[count, setCount] = useState(0)
  return (
    <>
    <Navbar count={count} setCount={setCount}/>
    <div className="underline"></div>

    
    <Homepage count={count} setCount={setCount}/>
    </>
  )
}

export default App;
