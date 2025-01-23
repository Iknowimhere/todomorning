import express from 'express';
import { deleteTodo, getTodo, getTodos, postTodo, updateTodo } from '../controllers/todoControllers.js';
import { auth } from '../middlewares/auth.js';

let router=express.Router()

router.post("/",auth,postTodo)
router.get("/",auth,getTodos)
router.get("/:id",auth,getTodo)
router.put("/:id",auth,updateTodo)
router.delete("/:id",auth,deleteTodo)


// router.route("/").get(getTodos).post(postTodo);
// router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

export default router;