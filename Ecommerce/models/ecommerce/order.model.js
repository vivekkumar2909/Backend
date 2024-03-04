import mongoose from 'mongoose';

const OrderItemsSchema = new mongoose.Schema({
    ProductId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    Quantity:{
        type:Number,
        required : true,
    }
})

const OrderSchema = new mongoose.Schema({
    OrderPrice:{
        type:Number,
        required : true,
    },
    Customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    OrderItems:{
        type: [OrderItemsSchema],
        // required: true,
    },
    Address:{
        type:String,
        required : true,
    },
    Status:{
        type:String,
        enum :["Pending","Cancelled","Delivered"],
        default : "Pending",
    }
},{timestamps:true});

export default mongoose.model('Order', OrderSchema);