import express from 'express';
import { deleteTodo, getTodo, getTodos, postTodo, updateTodo } from '../controllers/todoControllers.js';
import { auth } from '../middlewares/auth.js';

let router=express.Router()

router.post("/",postTodo)
router.get("/",getTodos)
router.get("/:id",getTodo)
router.put("/:id",updateTodo)
router.delete("/:id",deleteTodo)


// router.route("/").get(getTodos).post(postTodo);
// router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

export default router;