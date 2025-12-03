import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('Button is clicked');
  }
  return (
    <div>
      <h1>Hlo Guys</h1>
      <button onMouseEnter={btnClicked}>Click</button>
    </div>
  )
}

export default App
