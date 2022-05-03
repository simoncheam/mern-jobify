import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from 'dotenv'
dotenv.config()

const app = express();

import connectDB from "./db/connect.js";

//middleware

import notFoundMiddleware from "./middleware/not-found.js";

app.get('/', (req,res) => {
   // throw new Error("There was an error ")
    res.send('welcome');
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 3000;



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`Server listening on ${port}...`)
        })

    } catch (error) {
        console.log(error)
    }
}
start()