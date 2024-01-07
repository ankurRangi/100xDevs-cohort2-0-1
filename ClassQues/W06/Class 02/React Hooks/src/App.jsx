import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  return <div>
    <input type="Number"></input><br />
    <div>
      Sum is {}
    </div>

    <button onClick={function(){
      setCount(count+1)
    }}>Counter is {count}</button>
  </div>
}

export default App




// function App() {

//   const [selectedId, setSelectedId] = useState(1);

//   return <div>
//     <button onClick={function(){
//       setSelectedId(1)
//     }}>1</button>
    
//     <button onClick={function(){
//       setSelectedId(2)
//     }}>2</button>
    
//     <button onClick={function(){
//       setSelectedId(3)
//     }}>3</button>

//     <button onClick={function(){
//       setSelectedId(4)
//     }}>4</button>

//     <Todo id={selectedId} />
//   </div>


// function Todo({id}) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then(async function(res) {
//         const json = await res.json();
//         setTodo (json.todo);
//       })
//   }, [id])

//   return <div>
//     <h3>ID: {id}</h3>
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }



// useEffect( ()=>{
//   axios.get("https://sum-server.100xdevs.com/todos?id=1")
//   .then( async function(res){
//     const json = await res.json();
//     setCount(json.todos);
//   })
// }, []);