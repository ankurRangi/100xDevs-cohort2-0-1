import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState(
    {
      name: "Ankur Rangi",
      description: "Full Stack Developer and student of 100xDevs Cohort 2.0",
      interest: ["Dancing", "Basketball", "Open Source"],
      media: [
        "https://linkedin.in/ankur-rangi",
        "https://twitter.com/ankurRangi"
      ]
    }
);

  return (
    <div>
      <Card name={user.name} description={user.description} interest={user.interest} media={user.media}></Card>
    </div>
  )
}

function Card(props){
  return <div>
    <h1>{props.name}</h1> <br />
    <h4>{props.description}</h4> <br />
    <h2>Interets</h2>
    <div>{props.interest.map( (item) => <li>{item}</li>)}</div><br />
    <div>{props.media.map ((link) => <button>{link}</button>)}</div>
  </div>
}

function listReturnList(list){
  const arrayDataItems = list.map((item) => <li>{item}</li>);
  return <ul>{arrayDataItems}</ul>;
}

function objReturnButton(obj){
  const arrayDataItems = obj.map((link) => <button>{link}</button>);
  return <dic>{arrayDataItems}</dic>;
}

export default App
