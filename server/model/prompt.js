import mongoose, { Schema } from 'mongoose'

const promptSchema=new Schema({
    question:String,
    userid:String,
    answer:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const prompt=mongoose.model('prompt',promptSchema)

export default prompt