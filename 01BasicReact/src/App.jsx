import { useState } from 'react'

import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  const incriment =()=>{
    
    setCounter(counter+1)

    //  setCounter(counter+1)
    //  setCounter(counter+1)
    //  setCounter(counter+1)
    //  setCounter(counter+1)
    // for multipal setCounter then output incrise by 1 its BECAUSE of react fiber consept that
    //   react send data in a chunks thats why for this in react point of view he is doing sm work again and again
    //  so in the end react update by 1 
  }
  const decrement=()=>{
  
    setCounter(counter-1)
  }

 
  return (
    <>
   <h1>Chai aur code Counter</h1>
   <h2>Counter:- {counter}</h2>
   <button onClick={incriment} disabled={counter>=20} >INC</button>
   <button onClick={decrement} disabled={counter<=0}>Dec</button>
   </>
  )
}

export default App
