import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    text: {
        type: String
    },
    author: {
        type: String
    }
}, {
    timestamps: true
});

const imageSchema = new Schema({
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        // type: Currency,
        type: String,
        required: true,
        min: 0
    },
    countInStock: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    numReviews: {
        type: Number,
    },
    catagory: {
        type: String,
    },
    images: [imageSchema],
    comments: [commentSchema]
}, {
    timestamps: true
});


const Product = mongoose.model('Product', productSchema);

export default Product;