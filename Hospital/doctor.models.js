import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    name:{
        type:string,
        required:true,
    },
    address1:{
        type:string,
        required:true,
    },
    address2:{
        type:string,
        // required:true,
    },
    city:{
        type:string,
        required:true,
    },
    pincode:{
        type:string,
        required:true,
    },
    speciality:[
        {
            type:string,
            required:true,
        }
    ]

},{timestamps:true});

export default mongoose.model('Doctor', DoctorSchema);