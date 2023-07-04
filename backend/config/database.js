import mongoose from "mongoose";    



export const connectDatabase = () => {
   
    const connect = mongoose.connect(`${process.env.MONGO_URL}`).then((c) =>{
        console.log(`Mongodb connect to: ${c.connection.host}`)
    })
    .catch((e)=>{
        console.log(e)
    })
}