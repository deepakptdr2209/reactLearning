import { useState } from 'react'



function App() {
  //const [count, setCount] = useState(0)
//lets now create todo in react 
// state for todo below
 const [todos, setTodos] = useState([{
  title : "go to gym",
  description : "between 7 to 9",
  completed : false
 },
  {
  title : "do dsa",
  description : "2 proplems",
  completed : false
  }
 ])
 /* return(
    <div>
     <CustomButton count= {count} setCount = {setCount}></CustomButton>
    </div>
  ) */

  function addTodo(){
    setTodos([...todos,{
      title : "new todos",
      description : "abcd"
    }])
  }
  return(

    <div>
      <button onClick = {addTodo}> Add New Todo</button>
   { todos.map(function(todo){
      return <Todo title = {todo.title} description = {todo.description}></Todo> 
    })}
    </div>
  )
}
//component which take only one element of todo array
 function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
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
