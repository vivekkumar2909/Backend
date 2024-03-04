import mongoose from "mongoose";

const MedicalRecordSchema = new mongoose.Schema({

},{timestamps:true});

export default mongoose.model('MedicalRecord', MedicalRecordSchema);