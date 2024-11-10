const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    Price: String,
    description: String,
    rating: String,
    images: [{
        image: String
    }],

    category: String,
    seller: String,
    stock: String,
    numberOfReviews: String,
    createdAt: Date
});

const ProductModel = mongoose.model('Product',productSchema);

module.export = ProductModel;