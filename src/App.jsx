import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return(
    <div>
      <CustomButton count= {count} setCount = {setCount}></CustomButton>
    </div>
  )
}
// component for button to move counter
// when you create component keep in mind that you write its first letter in uppercare 
function CustomButton(props){
  function onclickHandler(){
    props.setCount(props.count + 1);
  }
  return <button onClick={onclickHandler}>
    counter {props.count}
    </button>
}

export default App
