import mongoose from "mongoose";    



export const connectDatabase = async () => {
   try {
   await mongoose
    .connect(process.env.MONGO_URI, {
        useUnifiedTopology:true,
            useNewUrlParser: true,
            useCreateIndex: true
    }).then((c) =>{
        console.log(`Mongodb connect to: ${c.connection.host}`)
    })
    
   } catch (error) {
              ((e)=>{
        console.log(e)
    })
   }
   
    
}