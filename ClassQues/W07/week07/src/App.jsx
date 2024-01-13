import { Suspense, lazy, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
const  Dashboard = lazy( () => import  ('./components/Dashboard'))
const Landing = lazy( () => import ('./components/Landing'))

function App() {
  const [count, setCount] = useState(0);
  return ( 
    <div>
      <Count count={count} setCount={setCount}/>
    </div>
  )
}

function Count({count, setCount}) {
  return <div>
    {count}
    <Buttons count={count} setCount={setCount}/>

  </div>
}

function Buttons({count, setCount}){
  return <div>
    <button onClick={() => {
        setCount(count+1)
      }}>Increase</button>

    <button onClick={() => {
        setCount(count-1)
      }}>Decrease</button>
  </div>
}

export default App


{/* <BrowserRouter>
<Appbar />
<Routes>
    <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
    <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
</Routes>
</BrowserRouter> */}

{/* <button onClick={ ()=> {
          window.location.href="/";
        }}>Landing Page</button> */}