import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  


  function onButtopnclick(){
    setCount(count + 1);

  }
  return (<button onClick={onButtopnclick}>counter {count}</button>)
}

export default App
