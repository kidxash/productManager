import mongoose from "mongoose";

const model = mongoose.Schema ({
    Title: {
        type:String,
        requird: true
    },
    productData: {
        type:String,
        required: true
    },
    
}) 
const product = mongoose.model('product', model);

export default product

