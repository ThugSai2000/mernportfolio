import mongoose from "mongoose";    
import dotenv from "dotenv"


export const connectDatabase = () => {
    dotenv.config()
    mongoose
    .connect(process.env.MONGO_URI).then((c) =>{
        console.log(`Mongodb connect to: ${c.connection.host}`)
    })
    .catch((e)=>{
        console.log(e)
    })
}