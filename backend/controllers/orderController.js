const orderModel = require('../models/orderModel');

exports.createOrder = async (req, res, next) => {

    res.json(
        {
            success:true,
            message:"order"
        }
    )
}