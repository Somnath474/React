import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(10)
  function increase(){
    setnum(num+1)
  }
  function decrease(){
    setnum(num-1)
  }
  function jump(){
    setnum(num+5)
  }

  const [ok,setok] = useState({user:'Somnath',age:20})

  function change(){
    const newok={...ok}
    newok.user='Suresh'
    setok(newok)
  }
  return (
    <div>
      <h1>{num}</h1>
      <h1>{ok.user}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jump}>Jump</button>
      <button onClick={change}>Okkarobe</button>
    </div>
  )
}

export default App
