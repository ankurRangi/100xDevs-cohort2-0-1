const zod = require("zod");

const createTodoSchema = zod.Schema({
    title: zod.string(),
    description: zod.string()
})

const updateTodoSchema = zod.Schema({
    id: zod.string()
})

module.exports = {
    createTodoSchema: createTodoSchema,
    updateTodoSchema: updateTodoSchema
};