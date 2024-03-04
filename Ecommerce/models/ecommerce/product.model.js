import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description:{
        required: true,
        type: String,
    },
    price:{
        // required: true,
        type: Number,
        default: 0
    },
    ProductImage:{
        required: true,
        type: String,
    },
    stock:{

        default:0,
        type: Number,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    Owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps: true});

export const Product = mongoose.model('Product','productSchema');