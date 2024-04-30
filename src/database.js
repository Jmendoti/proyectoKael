import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://kaellopez987:1ljSmaTsQZbiZZkH@cluster0.0onof2v.mongodb.net/")
        console.log(">>> Database Connected")
    } catch (error) {
        console.log(error);
    }
}