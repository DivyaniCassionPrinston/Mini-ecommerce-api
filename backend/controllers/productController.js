const ProductModel = require('../models/productModel');

exports.getProducts = async(req, res, nxt) =>{
    const products = await ProductModel.find({});

    res.json({
        success: true,
        products
    })
}

exports.getSingleProducts =(req, res, nxt) =>{
    res.json({
        success: true,
        message: 'Get Single products working!'
    })
}