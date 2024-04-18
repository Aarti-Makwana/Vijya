import mongoose from "./dbCon.js";

const productSchema = new mongoose.Schema({
    ratings: {
        type: Number,
    },
    price: {
        type: Number,
    },
    desc: {
        type: String,
    },
    image: {
        type: String
    }
});
const Product = mongoose.model('Product', productSchema, 'products');
export default Product;
