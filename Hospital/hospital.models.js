import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema({
    name:{
        typeof: String,
        required: true,
    },
    salary:{
        typeof: Number,
        required: true,
        default: 0,
    },
    qualification:{
        typeof: String,
        required: true,
    },
    experienceInYears:{
        typeof: Number,
        required: true,
        default: 0,
    },
    WorksInHospitalS:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Hospital",
        }
    ]
},{timestamps:true});

export default mongoose.model('Hospital', HospitalSchema);