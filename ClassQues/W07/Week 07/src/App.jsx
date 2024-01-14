import { useContext } from "react"
import { CountContext } from "./context";
import { Navigate } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";


function App() {
  return (
    <div>
        <Count />
    </div>
  )
}

function Count() {
  return <div>
    <RecoilRoot>
      <CountRenderer />
      <Buttons />
    </RecoilRoot>

  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
    {count}
    </b>
    <EvenCompWithSelector/>
  </div>
}

function EvenCompWithUseMemo(){
  const count = useRecoilValue(countAtom);

  // if (count % 2 == 0){     Basic Approach but includes re-rendering
  //   return <div>
  //     It is even
  //   </div>
  // }

  const isEven = useMemo( () => {   // Can use UseMemo or use Selector from recoil like below.
    return count % 2 == 0;
  }, [count]);

  return <div>
    {isEven ? "It is Even" : null}
  </div>
}

function EvenCompWithSelector(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
      {isEven ? "It is Even" : null}
  </div>
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);

  // setCount(count + 1);
  // setCount(c => c + 1);      We dont need the count variable here
  // setCount(function(c) {     We dont need the count variable here
  //   return c + 1;
  // })
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>


    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}


export default App
