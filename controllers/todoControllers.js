import Todo from "../models/Todo.js";

let postTodo=async (req, res, next) => {
    console.log(req.userId);
    
    let { todoName } = req.body;
    try {
        if (!todoName) {
            throw new Error("todo name cant be empty")
        }
        await Todo.create({
            todoName: todoName,
            user:req?.userId
        })
        // res.status(201).send(newTodo);
        res.redirect("/api/v1/todo")
    } catch (error) {
        next(error)
    }
}

const getTodos=async (req, res, next) => {
    try {
        let todos = await Todo.find({user:req?.userId})
        // res.status(201).send(todos);
        res.render("home",{todos})
    } catch (error) {
        next(error)
    }
}

const getTodo=async (req, res, next) => {
    let { id } = req.params;
    try {
        let todo = await Todo.findById(id)
        res.status(200).json(todo)
    } catch (error) {
        next(error)
    }
}

const updateTodo=async (req, res, next) => {
    let { id } = req.params;
    try {
        await Todo.findByIdAndUpdate(id, { isCompleted: req.body.isCompleted })
        // res.status(200).json(updatedTodo)
        res.redirect("/api/v1/todo")
    } catch (error) {
        next(error)
    }
}

const deleteTodo=async (req, res, next) => {
    let { id } = req.params;
    try {
        await Todo.findByIdAndDelete(id)
        // res.status(200).json("Todo deleted successfully")
        res.redirect("/api/v1/todo")
    } catch (error) {
        next(error)
    }
}

export {
    postTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
}