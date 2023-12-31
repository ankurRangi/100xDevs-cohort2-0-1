import { useState } from 'react';

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [todos, setTodos] = useState([]);
    return <div>
        <input style={{
            margin:20,
            padding:10
        }} type="text" placeholder="Title" onChange={function(e){
            setTitle(e.target.value);
        }}></input> 
        <br />
        <input style={{
            margin:20,
            marginTop:10,
            padding:10
        }} type="text" placeholder="Description" onChange={function(e){
            setDescription(e.target.value);
        }}></input>
        <br />

        <button style={{
            marginLeft:55,
            marginTop: 5,
            padding:10
        }} onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo Added!");
            })
        }}>Add a todo</button>

        <button style={{
            marginLeft:55,
            marginTop: 5,
            padding:10
        }} onClick={ ()=> {
            fetch("http://localhost:3000/todos")
            .then(async function(res){
                const json = await res.json()
                setTodos([...todos, json.maps( (todo) => {
                    return todo;
                })]);
            })
        }}>Show Previous blogs</button>
    </div>
}