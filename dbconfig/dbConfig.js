import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDb connected');
        })
        connection.on('error',(err) =>{
            console.log('MongoDb connection error.' + err);
        })
    } catch (error) {
        console.log('somthing goes wrong')
        console.log(error);
    }
}