import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    _id: String,
    title: String,
    course: String,
    points: Number,
    description: String,
    availableFrom: String,
    availableUntil: String,
    dueDate: String
},
    { collection: "assignments" }
);
export default assignmentSchema;