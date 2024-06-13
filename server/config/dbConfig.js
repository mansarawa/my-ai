import mongoose from "mongoose";

export default async function connectToDb(){
    try {
        await mongoose.connect("mongodb+srv://mansarawa:mansa%407773@cluster0.0rqhhtz.mongodb.net/chatBot")
        console.log("connectes successfully")
    } catch (error) {
        console.log(error)
    }
}