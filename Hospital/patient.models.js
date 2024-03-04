import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    diagonsedWith:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    bloodGroup:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        enum:["Male", "Female","Other"],
        required: true,
    },
    addmittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    }
},{timestamps:true});

export default mongoose.model('PatientRecord', PatientSchema);