
export function CreateTodo(){
    return <div>
        <input style={{
            margin:20,
            padding:10
        }} type="text" placeholder="Title" /> <br />
        <input style={{
            margin:20,
            marginTop:10,
            padding:10
        }} type="text" placeholder="Description" /><br />

        <button style={{
            marginLeft:55,
            marginTop: 5,
            padding:10
        }}>Add a todo</button>
    </div>
}