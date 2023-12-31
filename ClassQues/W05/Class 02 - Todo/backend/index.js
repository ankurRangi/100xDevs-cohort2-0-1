// Write express boilerplate code
const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types");
const app = express();

app.use(exp.json());

app.post('/todo', (req, res) =>{
    const createPayload = req.body;
    const parsedPayload = createTodoSchema.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            message: "You have send wrong inputs"
        })
    }else{
        return
    }
})

app.get('/todos', (req, res) =>{

})

app.get('/todos/:todoId', (req, res) =>{

})

app.put('/completed', (req, res) =>{

})

app.listen(3000);