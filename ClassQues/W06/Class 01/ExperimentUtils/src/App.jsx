import { Children, Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>

    <CardWrapper>
      Hi there
    </CardWrapper>
    
    <CardWrapper>
      <div>
        Hiiiiii
      </div>
    </CardWrapper>
    </div>
    
  )
}

function CardWrapper({children}) {
  return <div style={{border: "2px solid black", padding: 20, margi: 10}}>
    {children}
  </div>
}

// function Todo({title, description}){
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h5>
//       {description}
//     </h5>
//   </div>
// }

// function HeaderWithButtons(){
//   const [title, setTitle] = useState("My Name is Ankur")

//   function updateTitle(){
//     setTitle("My name is " + Math.random());
//   }

//   return <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header>
//   </div>
// }

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
