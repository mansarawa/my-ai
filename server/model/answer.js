import mongoose, { Schema } from 'mongoose'

const answerSchema=new Schema({
    answer:String,
    promptid:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const answer=mongoose.model('answer',answerSchema)

export default answer