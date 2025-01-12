const express = require("express");

const userRouter = require('./Routes/user')
const {logReqRes} = require('./middlewares')
const {connectMongoDB} = require('./connection')
const app = express();
const PORT = 8000;

//connection
connectMongoDB('mongodb://127.0.0.1:27017/youtube-app-1').then(()=>{
    console.log("mongodb conneted");
    
})

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

app.use('/api/users',userRouter); //routes

app.listen(PORT, () => console.log(`Server Started at PORT`));
