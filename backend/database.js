import mongoose from "mongoose";

export const connectDB = async () => {
    try{

        const conn = await mongoose.connect(process.env.Mongo_URI);
        console.log(`Connected to monngose ${conn.connection.host}`)
    } catch (error){
    console.log(`error: ${error.message}`);
    process.exit(1)
    }

}
export default connectDB