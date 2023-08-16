import mongoose from "mongoose";

const connectDb = async()=>{
    try{
        const response = await mongoose.connect(process.env.MONGO_DB_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        if(response){
            console.log("Database Connected");
        }
        else
            throw new Error("Error connecting database")
    }catch(err){
        console.log(err);
    }
}

export default connectDb;