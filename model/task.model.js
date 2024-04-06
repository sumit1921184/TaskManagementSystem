const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    description: { type: String, required: true },
    priority: {
        type: String,
        enum: ["Low", "High", "Medium"],
        default: "Low"
    },
    status:{
        type:String,
        enum:["Pending","Completed"],
        default:"Pending"
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
})

const TaskModel = mongoose.model("task", taskSchema)

module.exports = {
    TaskModel
}