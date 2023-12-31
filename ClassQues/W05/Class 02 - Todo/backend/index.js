// Write express boilerplate code
const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors())
    // origin: "http://localhost:5173/",


app.post('/todo', async (req, res) =>{
    const createPayload = req.body;
    const parsedPayload = createTodoSchema.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            message: "You have send wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })
})

app.get('/todos', async (req, res) =>{
    const todos = await todo.find();
    // console.log(todos) //type: promoise, so we need a await
    res.json({
        todos
    })
})

app.put('/completed', async (req, res) =>{
    const createPayload = req.body;
    const parsedPayload = updateTodoSchemaTodoSchema.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            message: "You have send wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body._id
    }, {
        completed: true
    })

    res.json({
        message: "Todo marked as completed"
    })
})

app.listen(3000);