import express from 'express';
import db from './config/db.js';
import todoRouter from './routes/todoRoutes.js'
import userRouter from './routes/userRoutes.js'
import methodOverride from 'method-override'
import cookieParser from 'cookie-parser';
let app = express();
//db connection
db();
//registering template engine
app.set("view engine","ejs")

app.use(cookieParser())
//processes incoming json data
// app.use(express.json());
//processes incoming form data
app.use(express.urlencoded({extended:true}))
//to serve static files
app.use(express.static("public"))
app.use(methodOverride('_method'))
//router instance


app.use("/api/v1/todo",todoRouter);
app.use("/api/v1/user",userRouter);

//global error handling middleware
app.use((err,req,res,next)=>{
    // console.log(err.stack);
    return res.status(400).json(err.message);
})


export default app;